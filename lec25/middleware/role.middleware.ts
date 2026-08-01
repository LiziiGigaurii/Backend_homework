import { BadRequestException, Injectable, NestMiddleware } from "@nestjs/common"
import { NextFunction, Request, Response } from "express"

@Injectable()
export class RoleMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const restrictedMethods = ["POST", "PATCH", "PUT", "DELETE"]

        if (restrictedMethods.includes(req.method)) {
            if (!req.headers["password"] || req.headers["password"] !== "200729") {
                throw new BadRequestException()
            }
        }

        next()
    }
}