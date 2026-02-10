import { Router, Response, Request } from "express"
import { MessageService } from "../services/message.service"
import { CreateMessageDto } from "../types/message.dto"

const router = Router()

const messageService = new MessageService()

router.post('/', async (req: Request<{}, {}, CreateMessageDto>, res: Response) => {
    const message: CreateMessageDto = req.body;
    const data = await messageService.addMessageToConversation(message)
    res.status(201).json(data)

})

//router.get('/', async (req: Request, res: Response) => {
//    const data = await messageService.getConversations()
//    res.send(data)
//})

export default router