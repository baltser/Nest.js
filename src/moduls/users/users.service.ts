import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./models/user.model";
import * as bcrypt from "bcrypt";
import {CreateUserDTO} from "./dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly userRepository: typeof User) {}
  async hashPassword (password) {

      return bcrypt.hash(password, 'salt');

  }
    async craeteUser(dto): Promise<CreateUserDTO> {

    dto.password = await  this.hashPassword(dto.password);

    await this.userRepository.create(dto);

      return dto;
  }
}
// private readonly users = [
//   {
//     userId: 1,
//     username: 'John',
//     password: 'fuck',
//   },
//   {
//     userId: 2,
//     username: 'Anton',
//     password: 'fuckOff',
//   },
// ];
// async findOne(username: string): Promise<User | undefined> {
//   return this.users.find((user) => user.username === username);
// }