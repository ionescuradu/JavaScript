import { NextFunction } from "express";
import { verifyToken } from "../lib/jwt";

declare global {
    namespace Express {
        interface Request {
            user?: {
                userId: number;
                email: string;
            }
        }
    }
}

export function authenticateToken(req: any, res: any, next: NextFunction) {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (!token) {
            return res.status(401).json({ error: "No token provided" });
        }
        const decoded = verifyToken(token)

        req.user = {
            userId: decoded.id,
            email: decoded.email
        };
        next()
    } catch (error) {
        res.status(403).json({ error: "Invalid or expired token" });
    }
}