import {BadRequestException, Injectable} from '@nestjs/common';
import { UsersService } from "../users/users.service";
// import { JwtService} from "@nestjs/jwt";
import {CreateUserDTO} from "../users/dto";
import {appError} from "../../common/constants/errors";
import {UserLoginDTO} from "./dto";
import * as bcrypt from 'bcrypt';
import {AuthUserResponse} from "./response";
import {TokenService} from "../token/token.service";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private tokenService: TokenService
    ) {}
    async registerUsers (dto: CreateUserDTO): Promise<CreateUserDTO> {

        const existUser = await this.usersService.findUserByEmail(dto.email);
        if(existUser) throw new BadRequestException(appError.USER_EXIST);
        return this.usersService.createUser(dto);

    }
    async loginUser (dto: UserLoginDTO): Promise<AuthUserResponse> {
        const existUser =  await this.usersService.findUserByEmail( dto.email );
        if (!existUser) throw new BadRequestException(appError.USER_NOT_EXIST);

        const validatePassword = await bcrypt.compare(dto.password, existUser.password);
        if (!validatePassword) throw new BadRequestException(appError.WRONG_DATA);
        const token = await this.tokenService.generateJwtToken(dto.email);
        return {...existUser, token};
    }

    // async validateUser(username: string, pass: string): Promise<any> {
    //     const user = await this.usersService.findOne(username);
    //     if(user && user.password === pass) {
    //         const { password, ...result } = user;
    //         return result;
    //     }
    //     return null
    // }

    // async login(user: any) {
    //     const payload = { username: user.username, sub: user.userId };
    //     return {
    //         access_token: this.jwtService.sign(payload)
    //     }
    // }
}
