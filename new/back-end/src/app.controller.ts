import { Controller, Request, Post,Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
// import { AuthService } from './auth.service';
import { LocalStrategy } from './auth/local.strategy';

@Controller()
export class AppController {
  @UseGuards(AuthGuard('42'))
  @Get('/login/42/return')
  async login(@Request() req) 
  {
    return req.user;
  }
}
