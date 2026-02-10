import express, { Request, Response} from "express"
import cors from "cors"
import dotenv from "dotenv"
import { GreetDto } from "./types/greet.dto"
import { promises as fs } from "fs";
import { UserDto } from "./types/user.dto";
import { SumDto } from "./types/sum.dto";

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT;

app.get('/hello', (req: Request, res: Response) => {
    res.json({ message: "Hello everyone!"});
})

app.post('/hello', (req: Request<{}, {}, GreetDto>, res: Response) => {
    const { name } = req.body;

    res.json({ result: `Hello ` + name })
})

app.get('/GetSum', (req: Request<{}, {}, SumDto>, res: Response) => {
    const { numberA, numberB } = req.body;

    res.json({ result: numberA + numberB })
});

app.post('/AddUser', async (req: Request<{}, {}, UserDto>, res: Response) => {
    const user: UserDto = req.body;
    const filePath = './users.json';  // Path to the static JSON file

    try {
        let users: UserDto[] = [];
        const data = await fs.readFile(filePath, 'utf8');
        users = JSON.parse(data);

        users.push(user);

        await fs.writeFile(filePath, JSON.stringify(users, null, 2));

        res.json({ message: "User added successfully" });
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).json({ message: "Failed to save user" });
    }
});

app.get('/GetUsers', async (req: Request, res: Response) => {
    const filePath = './users.json';

    try {
        const data = await fs.readFile(filePath, 'utf8');
        const users: UserDto[] = JSON.parse(data);
        res.json(users);
    } catch (error) {
        console.error("Error reading users:", error);
        res.status(500).json({ message: "Failed to read users" });
    }
});

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
})