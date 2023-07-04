import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from "../users/users.module";
import {TokenModule} from "../token/token.module";
import {AuthController} from "./auth.controller";
import {JwtStrategy} from "../../strategy";

@Module({
  imports: [
      UsersModule,
      TokenModule
  ],
    controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
