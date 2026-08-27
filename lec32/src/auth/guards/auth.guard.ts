
import { Injectable, CanActivate, ExecutionContext, BadRequestException } from '@nestjs/common';
import {JwtService} from "@nestjs/jwt"

@Injectable()
export class AuthGuard implements CanActivate {
constructor (private jwtService:JwtService){}

  async canActivate(context: ExecutionContext,): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const token = this.getToken(request.headers)

    if (!token) throw new BadRequestException()
        try {
            const payLoad = this.jwtService.verify(token)
            request.userId = payLoad.userId
        } catch (error) {
            throw new BadRequestException()
        }
    return true
  }

  getToken(headers: Record<string, string | string[] | undefined>) {
    const authHeader = headers["authorization"];
    if (!authHeader) return null;
    const [type, token] = typeof authHeader === 'string' ? authHeader.split(' ') : ['',''];
    return type === 'Bearer' ? token : null;
  }
}