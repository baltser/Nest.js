import {Body, Controller, Post} from "@nestjs/common";
import {UsersService} from "./users.service";
import {CreateUserDTO} from "./dto";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UsersService) {}

    @Post('create-user')
    createUsers(@Body() dto: CreateUserDTO){
        return  this.userService.createUser(dto);
    }
}