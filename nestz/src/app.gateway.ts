import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Logger } from '@nestjs/common'
import { Socket, Server } from 'socket.io';

@WebSocketGateway(3080, { cors: { origin: '*' } })
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() wss: Server;
  p1: string = "";
  p2: string = "";
  // Cls: string[] = [];



  private logger: Logger = new Logger('AppGateWay');

  afterInit(server: Server) {
    this.logger.log('Initialized!');
  }

  handleConnection(client: Socket, ...args: any[]) {

    // console.log(`${client.email}`);
    // if(this.Cls.length < 2)
    // {
    //   this.Cls.push(client.id);
    // }
  }

  //each socket with unuque id so unique client id 

  handleDisconnect(client: Socket) {
    this.logger.log(`client disconnected: ${client.id}`);

    // if (this.Cls.length > 0) {
    //   // remove this client from the list of connected clients
    //   this.Cls.splice(this.Cls.indexOf(client.id), 1);
    // }
  }

  // this will return to client who sent the msg 
  // not working fot a chat' room 
  // @SubscribeMessage('msgToServer')
  // handleMessage(client: Socket,  text:string): WsResponse<string> {

  //   // or client.emit('msgToClient', text)
  //   return {event:'msgToClient', data: text};
  // }

  // we ginna calll another decorator  : @WebSocketServer()
  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, data: { sessionId: string, data: any }): void {
    // data.sessionId = this.Cls[5];
    // console.log(this.Cls.length);
    // this.logger.log(`client sent a message: ${data}`);
    client.broadcast.emit('msgToClient', data);
  }

  @SubscribeMessage('UserToServer')
  handleUser(client: Socket, data : any): void {
    
    console.log(data);
    if(data === "init")
    {
      this.wss.emit('UserToClient', {P1: this.p1, P2: this.p2});
      return;
    }
    else if(this.p1 === "" && this.p2 === "")
    {
      this.p1 = data.Email_player1;
      this.p2 = data.Email_player2;
    }
    this.wss.emit('UserToClient', {P1: this.p1, P2: this.p2});
  }
}