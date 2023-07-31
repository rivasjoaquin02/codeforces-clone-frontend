import { Session } from "./types";

export const isSession = (obj: any): obj is Session => {
    return (
        obj &&
        typeof obj.username === "string" &&
        typeof obj.access_token === "string" &&
        typeof obj.token_type === "string"
    );
};
