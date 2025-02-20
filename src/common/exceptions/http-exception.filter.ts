import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const exceptionResponse = exception.getResponse();
    if (typeof exceptionResponse === 'object' && 'httpStatus' in exceptionResponse) {
      delete exceptionResponse['httpStatus'];
    }
    console.log(exceptionResponse)
    response.status(exception.getStatus()).json(exceptionResponse);
  }
}
