import { Router, Response, Request } from "express"
import { ConversationService } from "../services/conversation.service"

const router = Router()

const conversationService = new ConversationService()

router.post('/', async (req: Request, res: Response) => {
    const data = await conversationService.createConversation()
    res.send(data)

})

router.get('/', async (req: Request, res: Response) => {
    const data = await conversationService.getConversations()
    res.send(data)
})

export default router