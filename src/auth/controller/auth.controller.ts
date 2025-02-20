
import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { LoginRequest } from '../dto/LoginRequest.dto';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from '../passport/local-auth.guard';
import { JwtAuthGuard } from '../passport/jwt-auth.guard';
import { Public } from '../decorator/customize';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @Public()
  @UseGuards(LocalAuthGuard)
  handleLogin(@Request() req) {
    return this.authService.login(req.user);
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
