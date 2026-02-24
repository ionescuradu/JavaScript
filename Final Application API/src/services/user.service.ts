import { supabase } from "../lib/supabase";
import { hashPassword } from "../lib/hash";
import type { CreateUserDTO, UserDTO } from "../types/user.dto";

export class UserService {
    async createUser(user: CreateUserDTO) {
        const hashedPassword = await hashPassword(user.password);

        const { data, error } = await supabase
            .from("users")
            .insert({ ...user, password: hashedPassword })
            .select()
            .single()

        if (error) {
            throw new Error(error.message);
        }
        return data;
    }
}
