import { Router, Request, Response } from "express";
import { ConversationService } from "../services/conversation.service";
import { authenticateToken } from "../middleware/auth.middleware";

const router = Router()
router.use(authenticateToken)

const conversationService = new ConversationService()

router.post('/AddConversation', async (req: Request, res: Response) => {
    const data = await conversationService.createConversation()
    res.send(data)
})

router.get('/GetConversations', async (req: Request, res: Response) => {
    const data = await conversationService.getConversations()
    res.send(data)
})

router.delete('/DeleteConversation', async (req: Request, res: Response) => {
    const data = await conversationService.deleteConversation(req.query.conversation_id as string)
    res.send(data)
})

export default router