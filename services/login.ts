import { Result } from "@/types";
import axios from "axios";
import { Session, storeSession } from "./session";

const baseUrl = "http://127.0.0.1:8000/auth/login";

interface LoginCredentials {
    username: string;
    password: string;
}

const isLoginCredentials = (obj: any): obj is LoginCredentials => {
    return (
        obj &&
        typeof obj.username === "string" &&
        typeof obj.password === "string"
    );
};

type Token = {
    access_token: string;
    token_type: string;
};

const login = async (
    credentials: LoginCredentials
): Promise<Result<Session>> => {
    if (!isLoginCredentials(credentials))
        return {
            success: false,
            error: "Credentials in wrong format than expected",
        };

    try {
        const credentialsRecord: Record<string, string> = {
            username: credentials.username,
            password: credentials.password,
        };

        const { data } = await axios.post(
            baseUrl,
            new URLSearchParams(credentialsRecord)
        );
        if (!data)
            return {
                success: false,
                error: "Invalid Credentials",
            };

        const { access_token, token_type } = data as Token;
        const newSession: Session = {
            username: credentials.username,
            access_token,
            token_type,
        };
        const sessionStored = storeSession(newSession);
        if (!sessionStored.success)
            return {
                success: false,
                error: sessionStored.error,
            };

        return {
            success: true,
            data: newSession,
        };
    } catch (e) {
        const error = e as Error;
        return {
            success: false,
            error: error.message,
        };
    }
};

export default { login };
