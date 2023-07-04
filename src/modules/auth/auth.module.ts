import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from "../users/users.module";
import {TokenModule} from "../token/token.module";
import {AuthController} from "./auth.controller";

@Module({
  imports: [
      UsersModule,
      TokenModule
  ],
    controllers: [AuthController],
  providers: [AuthService,],
  exports: [AuthService],
})
export class AuthModule {}
