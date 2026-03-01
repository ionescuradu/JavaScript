import { Router, Request, Response } from "express";
import { MessageService } from "../services/message.service"
import { GeminiService } from "../services/gemini.service"
import { authenticateToken } from "../middleware/auth.middleware";
import { UserMessageDTO } from "../types/exercise.dto";

const router = Router()
router.use(authenticateToken)

const messageService = new MessageService()
const geminiService = new GeminiService()

router.post('/AddMessage', async (req: Request, res: Response) => {
    const data = await messageService.createMessage(req.body)
    res.send(data)              
})

router.post('/GenerateMessage', async (req: Request, res: Response) => {
    try {
        console.log("Request body:", JSON.stringify(req.body, null, 2));
        const { conversations_id, user_message } = req.body;
        console.log("Received GenerateMessage request:", { conversations_id, user_message });
        
        if (!conversations_id || !user_message) {
            console.log("Missing fields - conversations_id:", !!conversations_id, "user_message:", !!user_message);
            return res.status(400).send({ 
                error: "conversations_id and user_message are required",
                received: { conversations_id, user_message }
            });
        }

        const userMessage = user_message as UserMessageDTO;
        console.log("UserMessageDTO:", userMessage);

        // Save user message first
        await messageService.createMessage({
            conversations_id,
            text: user_message,
            role: 1 // 1 for user
        });

        // Get conversation history
        const messages = await messageService.getMessagesAsync(conversations_id);

        const userPrompt = `
            Your are a fitness coach. You will be given a conversation history and a new message from the user.
            Based on the conversation history and the new message, return a response for a cycling workout.
            The FTP is ${userMessage.FTP} and the total time in minutes for the workout is ${userMessage.Time}. 
            Answer using the below format and always answer only regaring the fitness generator app.
            The response should be in the following format:
            {
                totalExerciseDuration: number; // total duration of exercises in minutes
                intervals: [{
                    intervalDuration: number; // duration of this interval in minutes
                    power: number
                }]
            }`

        // Generate AI response using Gemini
        const aiResponse = await geminiService.generateChatResponse(
            messages.map(m => ({ role: m.role.toString(), text: m.text || "" })),
            userPrompt
        );

        // Save AI response
        await messageService.createMessage({
            conversations_id,
            text: aiResponse,
            role: 0 // 0 for AI/assistant
        });

        const parsedResponse = JSON.parse(aiResponse);

        res.send({ 
            success: true, 
            user_message,
            ai_response: parsedResponse
        });
    } catch (error: any) {
        console.error("Error generating message:", error);
        res.status(500).send({ error: error.message });
    }
})

router.get('/GetMessages', async (req: Request, res: Response) => {
    console.log(req.query.conversations_id as string);
    const data = await messageService.getMessagesAsync(req.query.conversations_id as string)
    res.send(data)
})

router.put('/DeleteMessage', async (req: Request, res: Response) => {
    const data = await messageService.editMessageAsync(req.body)
    res.send(data)
})

export default router