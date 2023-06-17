import { chatbotPrompt } from "@/helpers/constants/chatbot-prompt";
import { ChartGPTMessage } from "@/lib/openai-stream";
import { MessageArraySchema } from "@/lib/validators/message";


export async function POST(req: Request){
    console.log('works')

    const {messages} = await req.json();

    const parsedMesasges = MessageArraySchema.parse(messages)

    const outboundMessages: ChartGPTMessage[] = parsedMesasges.map((message) => ({
        role: message.isUserMessage ? 'user' : 'system',
        content: message.text,
    }))

    outboundMessages.unshift({
        role: 'system',
        content: chatbotPrompt
    })
}