
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { ApiBodyOptions } from '@nestjs/swagger';
import { ApiResponse } from 'src/common/api-response';
import { AppException } from 'src/common/exceptions/app.exception';
import { ErrorCode } from 'src/common/exceptions/error-code.enum';
import { User } from 'src/modules/users/schemas/user.chema';
import { UserSessionService } from 'src/modules/users/service/user-session.service';
import { UserService } from 'src/modules/users/service/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService, 
    private userSessionService: UserSessionService


  ) {}

  async validateUser(username: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findOne(username);
    if (!user || user.password_hash !== pass) return null;
    return user;
  }

  async login(user: any): Promise<ApiResponse<any>> {
    const access_token = await this.generateAccessToken(user);
    const refresh_token = await this.generateRefreshToken(user);
    this.userSessionService.handleSaveTokenLogin({user_id: user._id,device_info: user.device_info ,access_token,refresh_token,ip_address: user.ip_address})
    return new ApiResponse({access_token: access_token})
  }

  async generateAccessToken(user: any): Promise<string> {
    const payload = { sub: user._id, email: user.email, full_name: user.full_name};
    return this.jwtService.sign(payload);
  }
  
  async generateRefreshToken(user: any): Promise<string> {
    const payload = { sub: user._id, email: user.email,full_name: user.full_name };
    return this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_SERCET'),
      expiresIn: this.configService.get<string>('JWT_REFRESH_TOKEN_EXPIRED'),
    });
  }
  
}
