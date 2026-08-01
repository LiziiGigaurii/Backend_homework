import { BadGatewayException, Injectable, NestMiddleware } from "@nestjs/common"
import { NextFunction, Request, Response } from "express"

@Injectable()
export class UserAgent implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {

        if (req.headers["user-agent"]?.startsWith("Mozilla/5.0")) {
            throw new BadGatewayException("Requests from browser are blocked")
        }

        next()
    }
}