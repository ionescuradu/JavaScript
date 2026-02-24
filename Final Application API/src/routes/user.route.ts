import { Router, Request, Response } from "express";
import { UserService } from "../services/user.service"

const router = Router()

const userService = new UserService()

router.post('/AddUser', async (req: Request, res: Response) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).send({ error: "Missing credentials: email and password are required." })
        return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        res.status(400).send({ error: "Invalid email format." })
        return
    }

    const data = await userService.createUser(req.body)
    res.send(data)
})

export default router
