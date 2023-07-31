import { Login, Token } from "./types";
import { isLoginCredentials } from "./validate";

import { Result } from "@/types";
import { storeSession } from "../session/session";
import axios from "axios";
import { Session } from "../session/types";

const baseUrl = "http://127.0.0.1:8000/auth";

const login = (credentials: Login) => {
    const credentialsRecord: Record<string, string> = { ...credentials };

    return axios
        .post<Token>(`${baseUrl}/login`, new URLSearchParams(credentialsRecord))
        .then((response) => response.data);
};

const loginService = async (credentials: Login): Promise<Result<Session>> => {
    if (!isLoginCredentials(credentials))
        return {
            success: false,
            error: "Credentials in wrong format than expected",
        };

    try {
        const session = await login(credentials).then(
            (token) => ({ ...token, username: credentials.username } as Session)
        );

        if (!session)
            return {
                success: false,
                error: "Invalid Credentials",
            };
        return storeSession(session);
    } catch (e) {
        const error = e as Error;
        return {
            success: false,
            error: error.message,
        };
    }
};

export default loginService;
