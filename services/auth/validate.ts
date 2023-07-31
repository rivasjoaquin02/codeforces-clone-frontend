import { Login, SignIn } from "./types";

export const isLoginCredentials = (obj: any): obj is Login => {
    return (
        obj &&
        typeof obj.username === "string" &&
        typeof obj.password === "string"
    );
};

export const isSignInCredentials = (obj: any): obj is SignIn => {
    return (
        obj &&
        typeof obj.username === "string" &&
        typeof obj.password === "string" &&
        typeof obj.email === "string" &&
        typeof obj.fullname === "string"
    );
};
