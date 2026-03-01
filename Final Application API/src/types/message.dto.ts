export interface MessageDTO {
    id: string;
    conversations_id: string;
    text: string | null;
    role: number;
}

export interface CreateMessageDTO {
    conversations_id: string;
    text: string | null;
    role: number;
}