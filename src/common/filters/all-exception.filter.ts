import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
    BadRequestException,
  } from '@nestjs/common';
  import { HttpAdapterHost } from '@nestjs/core';
import { response } from 'express';

  @Catch()
  export class AllExceptionsFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: any, host: ArgumentsHost): void {

      const { httpAdapter } = this.httpAdapterHost;

      const ctx = host.switchToHttp();

      const httpStatus =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;

      let responseBody = {
        statusCode: httpStatus,
        message: exception.response.message,
        timestamp: new Date().toISOString(),
        path: httpAdapter.getRequestUrl(ctx.getRequest()),
      };

      httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    }
  }
