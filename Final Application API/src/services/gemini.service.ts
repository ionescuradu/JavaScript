export class GeminiService {
    private apiKey: string;

    constructor() {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error("GEMINI_API_KEY is not set in environment variables");
        }
        this.apiKey = apiKey;
    }

    async generateResponse(prompt: string): Promise<string> {
        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash-lite:generateContent?key=${this.apiKey}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: prompt
                            }]
                        }]
                    })
                }
            );

            if (!response.ok) {
                const error = await response.text();
                throw new Error(`Gemini API error: ${response.status} - ${error}`);
            }

            const data = await response.json();
            return data.candidates[0].content.parts[0].text;
        } catch (error: any) {
            console.error("Error generating response from Gemini:", error);
            console.error("Error details:", error.message);
            throw new Error(`Failed to generate response from Gemini: ${error.message}`);
        }
    }

    async generateChatResponse(conversationHistory: Array<{ role: string; text: string }>, userMessage: string): Promise<string> {
        try {
            const contents = conversationHistory.map(msg => ({
                role: msg.role === "1" ? "user" : "model",
                parts: [{ text: msg.text }]
            }));

            contents.push({
                role: "user",
                parts: [{ text: userMessage }]
            });

            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${this.apiKey}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: contents,
                        generationConfig: {
                            responseMimeType: "application/json"
                        }
                    })
                }
            );

            if (!response.ok) {
                const error = await response.text();
                throw new Error(`Gemini API error: ${response.status} - ${error}`);
            }

            const data = await response.json();
            return data.candidates[0].content.parts[0].text;
        } catch (error: any) {
            console.error("Error generating chat response from Gemini:", error);
            console.error("Error details:", error.message);
            throw new Error(`Failed to generate chat response from Gemini: ${error.message}`);
        }
    }
}
