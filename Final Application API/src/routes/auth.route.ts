import { Router, Request, Response } from "express";
import { UserService } from "../services/user.service"

const router = Router()

const userService = new UserService()

router.post('/Login', async (req: Request, res: Response) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).send({ error: "Missing credentials: email and password are required." })
        return
    }

    try {
        const data = await userService.login(email, password)
        res.send(data)
    } catch (error: any) {
        res.status(401).send({ error: error.message })
    }
})

export default router
