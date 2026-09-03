import { Injectable, CanActivate, ExecutionContext, BadRequestException } from "@nestjs/common";
import {JwtService} from "@nestjs/jwt"
import type { IncomingHttpHeaders } from "http";

@Injectable()

export class AuthGuard implements CanActivate {
    constructor (private jwtService: JwtService) {}
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
        const token = this.getToken(request.headers)
        if (!token) throw new BadRequestException()
            try {
                const payload = this.jwtService.verify(token)
                request.userId = payload.userId
            } catch (error) {
                throw new BadRequestException()
            }
        return true
    }

    getToken(headers: IncomingHttpHeaders) {
        if (!headers["authorization"]) return null
        const [type, token] = headers["authorization"].split(" ")
        return type === "Bearer" ? token : null
    }
}