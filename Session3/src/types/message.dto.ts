export interface MessageDto {
    id: string,
    text: string,
    role: number,
    conversation_id: string
}

export interface CreateMessageDto {
    text: string,
    role: number,
    conversation_id: string
}