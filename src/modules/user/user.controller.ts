import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  async createUser(@Body() userData) {
    return await this.userService.create(userData);
  }

  @Post('findEmail')
  async findEmail(@Body() body) {
    const user = await this.userService.findByEmail(body.email);
    return user;
  }
}
