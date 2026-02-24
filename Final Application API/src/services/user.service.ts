import { supabase } from "../lib/supabase";
import type { CreateUserDTO, UserDTO } from "../types/user.dto";

export class UserService {
    async createUser(user: CreateUserDTO) {
        const { data, error } = await supabase
            .from("users")
            .insert(user)
            .select()
            .single()

        if (error) {
            throw new Error(error.message);
        }
        return data;
    }
}
