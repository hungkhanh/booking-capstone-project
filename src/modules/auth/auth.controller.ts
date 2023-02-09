import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { SignupUserDto } from '../user/user.dto';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @Post('signup')
  async signup(@Body() userData: SignupUserDto): Promise<any> {
    return await this.userService.create(userData);
  }
}
