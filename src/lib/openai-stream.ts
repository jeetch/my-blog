export type ChatGPTAgent = "user" | "system"


export interface ChartGPTMessage {
    role: ChatGPTAgent
    content: string
}