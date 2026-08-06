import { Observable } from "rxjs"
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common"


@Injectable()
export class IsAdmin implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        const role = request.headers["role"]
        if (!role || !["admin"].includes(role)) {
            throw new UnauthorizedException()
        } 
        return true 
    }
}

@Injectable()
export class IsEditor implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        const role = request.headers["role"]
        if (!role || !["admin", "editor"].includes(role)) {
            throw new UnauthorizedException()
        }
        return true
    }
}

@Injectable()
export class IsViewer implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        const role = request.headers["role"]
        if (!role || !["admin", "editor", "viewer"].includes(role)) {
            throw new UnauthorizedException()
        }
        return true
    }
}