import axios from "axios";
import { SignIn, Token } from "./types";
import { Result } from "@/types";
import { Session } from "../session/types";
import { isSignInCredentials } from "./validate";
import { storeSession as storeSession } from "../session/session";

const baseUrl = "http://127.0.0.1:8000/auth/";

const signin = (credentials: SignIn) => {
    const credentialsRecord: Record<string, string> = { ...credentials };

    return axios
        .post<Token>(
            `${baseUrl}/signin`,
            new URLSearchParams(credentialsRecord)
        )
        .then((response) => response.data);
};

const signinService = async (credentials: SignIn): Promise<Result<Session>> => {
    if (!isSignInCredentials(credentials))
        return {
            success: false,
            error: "Credentials in wrong format than expected",
        };

    try {
        const session = await signin(credentials).then(
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

export default signinService;
