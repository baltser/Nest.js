import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import configurations from "./configurations";
import{ SequelizeModule } from "@nestjs/sequelize";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configurations]
  }), AuthModule, UsersModule],
  controllers: [AppController, PostsController],
  providers: [AppService],
})
export class AppModule {}
