export interface UserDTO {
    id: number;
    email: string;
    password: string;
    created_at: string;
}

export interface CreateUserDTO {
    email: string;
    password: string;
}
