import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class xApiKey implements CanActivate {
  canActivate(context: ExecutionContext,): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest()
    if(request.headers["x-api-key"]=== process.env.SECRET) {
        return true
    }

    throw new UnauthorizedException()
  }
}
