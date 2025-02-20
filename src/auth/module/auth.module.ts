import { Module } from '@nestjs/common';
import { UsersModule } from 'src/modules/users/user.module';
import { AuthService } from '../service/auth.service';
import { LocalStrategy } from '../passport/local.strategy';
import { AuthController } from '../controller/auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserService } from 'src/modules/users/service/user.service';
import { PassportModule } from '@nestjs/passport';
import { UserSessionModule } from 'src/modules/users/user-session.module';
import { UserSessionService } from 'src/modules/users/service/user-session.service';
import { JwtStrategy } from '../passport/jwt.strategy';
import { JwtAuthGuard } from '../passport/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';


@Module({
  imports: [UsersModule,
    PassportModule,
    UserSessionModule,
    ConfigModule.forRoot(),  
    JwtModule.registerAsync({
      imports: [ConfigModule],  
      inject: [ConfigService], 
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
            expiresIn: configService.get<string>('JWT_ACCESS_TOKEN_EXPIRED'),
        },
    }),
 })],
  providers: [AuthService,LocalStrategy,UserService,UserSessionService,JwtStrategy,ConfigService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }
  ],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
