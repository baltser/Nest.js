import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from "../users/users.module";
// import { PassportModule } from "@nestjs/passport";
// import { LocalStrategy } from "./local.strategy";
// import {JwtModule} from "@nestjs/jwt";
// import {jwtConstants} from "../../common/constants/jwt";
// import {JwtStrategy} from "./jwt.strategy";
import {TokenModule} from "../token/token.module";
import {AuthController} from "./auth.controller";

@Module({
  imports: [
      UsersModule,
      TokenModule
  ],
    controllers: [AuthController],
  providers: [AuthService,
      // LocalStrategy, JwtStrategy
  ],
  exports: [AuthService],
})
export class AuthModule {}
