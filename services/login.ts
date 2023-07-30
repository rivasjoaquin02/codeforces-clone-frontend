import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/auth/login";

interface Login {
    username: string;
    password: string;
}

export interface Session {
    username: string;
    access_token: string;
    token_type: string;
}

const login = async (credentials: Login): Promise<Session> => {
    if (!credentials) throw new Error("Theres no Credentials");

    const credentialsRecord: Record<string, string> = {
        username: credentials.username,
        password: credentials.password,
    };

    const { data: Session } = await axios.post(
        baseUrl,
        new URLSearchParams(credentialsRecord)
    );

    return { username: credentials.username, ...Session };
};

export default { login };
