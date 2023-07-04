import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./models/user.model";
import * as bcrypt from "bcrypt";
import {CreateUserDTO} from "./dto";


@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly userRepository: typeof User) {}
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
  // async findOne(username: string): Promise<any> {
  //   return this.users.find((user) => user.username === username);
  // }
  async hashPassword (password) {
      return bcrypt.hash(password, 10);
  }
  async findUserByEmail(email: string) {
    return this.userRepository.findOne( { where: { email } } )
  }
    async createUser(dto): Promise<CreateUserDTO> {

    dto.password = await  this.hashPassword(dto.password);

    await this.userRepository.create({
      firstName: dto.firstName,
      userName: dto.userName,
      email: dto.email,
      password: dto.password
    });

      return dto;
  }
}