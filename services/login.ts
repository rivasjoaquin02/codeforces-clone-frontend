import axios from "axios";

const baseUrl = "http://localhost:8000/auth/login";

interface Login {
    username: string;
    password: string;
}

export interface AccessToken {
    access_token: string;
    token_type: string;
}

const login = async (credentials: Login): Promise<AccessToken> => {
    if (!credentials) throw new Error("Theres no Credentials");

    const credentialsRecord: Record<string, string> = {
        username: credentials.username,
        password: credentials.password,
    };

    const { data: access_token } = await axios.post(
        baseUrl,
        new URLSearchParams(credentialsRecord)
    );

    return access_token;
};

export default { login };
