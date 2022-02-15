import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  
  async validateUser(token: string): Promise<any> {
    console.log(token);

    return { token: token };
  }
}
