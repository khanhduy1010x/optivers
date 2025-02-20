
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { Request } from 'express';
import { AppException } from 'src/common/exceptions/app.exception';
import { ErrorCode } from 'src/common/exceptions/error-code.enum';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super(
      {
        usernameField: "email",
        passReqToCallback: true,
      }
    );
  }

  async validate(req: Request, username: string, password: string): Promise<any> {
    const {device_info, ip_address} = req.body;
    const isValid = await this.authService.validateUser(username, password);
    if (!isValid) {
      throw new AppException(ErrorCode.UNAUTHENTICATED);
    }
    return {...isValid, device_info:device_info ,ip_address: ip_address};
  }
}
