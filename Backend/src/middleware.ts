import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const jwtSecret = process.env.JWT_PASSWORD;

    if (!jwtSecret) {
        res.status(500).json({ message: "JWT secret not set" });
        return;
    }
    if (!header) {
        res.status(401).json({ message: "No authorization header" });
        return;
    }

    try {
        const decoded = jwt.verify(header as string, jwtSecret);
        if (typeof decoded === "string") {
            res.status(403).json({ message: "You are not logged in" });
            return;
        }
        (req as any).userId = (decoded as JwtPayload).id;
        next();
    } catch (err) {
        res.status(403).json({ message: "You are not logged in" });
    }
}