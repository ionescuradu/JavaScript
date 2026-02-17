import { Router, Request, Response } from "express";
import { MessageService } from "../services/message.service"

const router = Router()

const messageService = new MessageService()

router.post('/AddMessage', async (req: Request, res: Response) => {
    const data = await messageService.createMessage(req.body)
    res.send(data)
})

router.get('/GetMessages', async (req: Request, res: Response) => {
    console.log(req.query.conversation_id as string);
    const data = await messageService.getMessagesAsync(req.query.conversation_id as string)
    res.send(data)
})

router.put('/DeleteMessage', async (req: Request, res: Response) => {
    const data = await messageService.editMessageAsync(req.body)
    res.send(data)
})

export default router