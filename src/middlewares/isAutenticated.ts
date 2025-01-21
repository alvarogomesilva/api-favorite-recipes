import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { HttpException } from "../validators/HttpException";

export const isAutenticated = async (req: Request, res: Response, next: NextFunction) => {

    const authorization = req.headers.authorization

    if (!authorization) {
        res.status(401).json({ 'message-error-401': 'não autenticado' })
        return
    }
    
    const token = authorization?.substring(7) as string


    try {
        const { sub } = verify(token, process.env.JWT_SECRET as string)
        req.userId = sub as string

        next()

    } catch (error) {
        res.status(401).json({ 'message-error-401': 'não autenticado' })
    }

}