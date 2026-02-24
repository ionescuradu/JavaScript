import jwt from "jsonwebtoken"

const SECRET = "supersecret"

export function generateToken(payload: { id: number; email: string }): string {
    return jwt.sign(payload, SECRET, { expiresIn: "12h" })
}

export function verifyToken(token: string): { id: number; email: string } {
    return jwt.verify(token, SECRET) as { id: number; email: string }
}
