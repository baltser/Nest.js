import {Body, Controller, Patch, Req, UseGuards} from "@nestjs/common";
import {UsersService} from "./users.service";
import {UpdateUserDTO} from "./dto";
import {JwtAuthGuard} from "../../guards/jwt-guard";


@Controller('users')
export class UserController {
    constructor(private readonly userService: UsersService) {}
    @UseGuards(JwtAuthGuard)
    @Patch()
    updateUser(@Body() updateDto: UpdateUserDTO, @Req() request) {
        const user = request.user;
        return this.userService.updateUser(user.email, updateDto);
    }
}