import { Session } from "./login";

export const storeSession = (newSession: Session) => {
    window.localStorage.setItem("session", JSON.stringify(newSession));
};

export const getSession = (): Session => {
    const sessionJSON = window.localStorage.getItem("session");

    if (!sessionJSON)
        throw new Error("There is not session in the LocalStorage");
        
    const session = JSON.parse(sessionJSON);
    return session;
};
