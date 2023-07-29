import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/auth/signin";

interface SignIn {
    username: string;
    password: string;
    email: string;
    fullname: string;
}

export interface AccessToken {
    access_token: string;
    token_type: string;
}

const signin = async (credentials: SignIn): Promise<AccessToken> => {
    if (!credentials) throw new Error("Theres no Credentials");

    const credentialsRecord: Record<string, string> = {
        username: credentials.username,
        password: credentials.password,
        email: credentials.email,
        fullname: credentials.fullname,
    };

    const { data: access_token } = await axios.post(
        baseUrl,
        new URLSearchParams(credentialsRecord)
    );

    return access_token;
};

export default { signin };
