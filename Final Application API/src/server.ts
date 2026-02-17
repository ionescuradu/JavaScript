import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { healthRouter } from "./routes"
import conversationRouter from "./routes/conversation.route"
import messageRouter from "./routes/message.route"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT;

app.use("/health", healthRouter)
app.use("/conversation", conversationRouter)
app.use("/message", messageRouter)

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
})