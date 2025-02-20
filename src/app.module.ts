import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
import { AuthController } from './auth/controller/auth.controller';
import { AuthModule } from './auth/module/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DatabaseModule,
    AuthModule
  ],
  controllers: [AppController,AuthController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  }, AppService,],
})

export class AppModule {}