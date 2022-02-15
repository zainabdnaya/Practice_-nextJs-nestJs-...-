import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthModuleOptions } from '@nestjs/passport';


@Module({
  imports: [UsersModule, PassportModule,AuthModuleOptions],
  providers: [AuthService, LocalStrategy],
  exports : [AuthService],
})
export class AuthModule {}
