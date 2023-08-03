import axios from "axios";
import { Result } from "@/types";
import { UserResponse } from "@/app/api/auth/[...nextauth]/options";

const baseUrl: string = "http://127.0.0.1:8000/auth";

type RegisterField = "username" | "password" | "email" | "fullname";

const registerService = async (
    credentials: Record<RegisterField, string>
): Promise<Result<UserResponse>> => {
    if (
        !credentials ||
        !credentials.username ||
        !credentials.password ||
        !credentials.email ||
        !credentials.fullname
    )
        return { success: false, error: "Fields are missing" };

    try {
        const queryParams = `?email=${credentials.email.replace(
            "@",
            "%40"
        )}&fullname=${credentials.fullname.replace(" ", "%20")}`;

        const { data: user } = await axios.post<UserResponse>(
            `${baseUrl}/register${queryParams}`,
            new URLSearchParams({
                username: credentials.username,
                password: credentials.password,
            })
        );

        console.log(user);

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

export default registerService;
