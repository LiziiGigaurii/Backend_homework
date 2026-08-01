import { Response, Request, NextFunction } from "express"

export function expressMiddleware(req:Request, res:Response, next:NextFunction){
    console.log("response from express middleware")
    next()
}