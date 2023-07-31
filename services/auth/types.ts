export interface Login {
    username: string;
    password: string;
}

export interface SignIn {
    username: string;
    password: string;
    email: string;
    fullname: string;
}

export type Token = {
    access_token: string;
    token_type: string;
};
