import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from '../../posts/posts.controller';
import { AuthModule } from '../../auth/auth.module';
import { UsersModule } from '../users/users.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import configurations from "../../configurations";
import{ SequelizeModule } from "@nestjs/sequelize";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configurations]
  }),
      SequelizeModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          dialect: "mysql",
          host: configService.get('db_host'),
          post: configService.get('db_port'),
          username: configService.get('db_user'),
          password: configService.get('db_password'),
          database: configService.get('db_name'),
          synchronize: true,
          autoLoadModels: true,
          models: []
        })
      }),
    AuthModule,
    UsersModule
  ],
  controllers: [AppController, PostsController],
  providers: [AppService],
})
export class AppModule {}
