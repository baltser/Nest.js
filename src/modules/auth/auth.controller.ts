import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {CreateUserDTO} from "../users/dto";
import {UserLoginDTO} from "./dto";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {AuthUserResponse} from "./response";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @ApiTags('API')
    @ApiResponse({status: 201, type: CreateUserDTO})
    @Post('register')
    register( @Body() dto: CreateUserDTO): Promise<CreateUserDTO>{
        console.log(dto)
        return this.authService.registerUsers(dto);
    }
    @ApiTags('API')
    @ApiResponse({status: 200, type: AuthUserResponse})
    @Post('login')
    login (@Body() dto: UserLoginDTO) {
        return this.authService.loginUser(dto);
    }
}
