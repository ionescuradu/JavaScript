import { supabase } from "../lib/supabase";
import { hashPassword, comparePassword } from "../lib/hash";
import { generateToken } from "../lib/jwt";
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

    async login(email: string, password: string) {
        const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("email", email)
            .single()

        if (error || !data) {
            throw new Error("Invalid email or password.");
        }

        const isMatch = await comparePassword(password, data.password);
        if (!isMatch) {
            throw new Error("Invalid email or password.");
        }

        const token = generateToken({ id: data.id, email: data.email });
        return { token };
    }
}
