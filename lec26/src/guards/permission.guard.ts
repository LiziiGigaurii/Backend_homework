import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common"
import { Observable } from "rxjs"

@Injectable()
export class PermissionGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        const password = request.headers["password"]
        if (!password || password !== "admin123") {
            throw new UnauthorizedException()
        }
        return true
    }
}