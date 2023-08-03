import { isLoginCredentials } from "./validate";
import { Result } from "@/types";
import axios from "axios";
import { UserResponse } from "@/app/api/auth/[...nextauth]/options";

const baseUrl = "http://127.0.0.1:8000/auth";

type RegisterField = "username" | "password" | "email" | "fullname";

const loginService = async (
    credentials: Record<RegisterField, string>
): Promise<Result<UserResponse>> => {
    if (!isLoginCredentials(credentials))
        return {
            success: false,
            error: "Credentials in wrong format than expected",
        };

    try {
        const { data: user } = await axios.post<UserResponse>(
            `${baseUrl}/login`,
            new URLSearchParams(credentials)
        );

        if (!user)
            return {
                success: false,
                error: "Invalid Credentials",
            };

        return {
            success: true,
            data: user,
        };
    } catch (e) {
        const error = e as Error;
        return {
            success: false,
            error: error.message,
        };
    }
};

export default loginService;
