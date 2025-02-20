import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppExceptionFilter } from './common/exceptions/app-exception.filter';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AppExceptionFilter());
  app.useGlobalPipes(new ValidationPipe())
  const config = new DocumentBuilder()
  .setTitle('Opt-Verse Server API')
  .setDescription('Welcom to OTP-VERSE')
  .setVersion('1.0')
  .addTag('otp-vers')
  .build();
const documentFactory = () => SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, documentFactory);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
