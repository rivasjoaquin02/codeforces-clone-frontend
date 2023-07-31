import { Result } from "@/types";
import { Session } from "./types";
import { isSession } from "./validate";

export const storeSession = (newSession: Session): Result<Session> => {
    if (!newSession) return { success: false, error: "Invalid Session" };
    if (!isSession(newSession))
        return { success: false, error: "Missing Session Fields" };

    try {
        const sessionJSON = JSON.stringify(newSession);
        window.localStorage.setItem("session", sessionJSON);
    } catch (JSONError) {
        return { success: false, error: "Failed to convert Session to json" };
    }

    return { success: true, data: newSession };
};

export const getSession = (): Result<Session> => {
    try {
        const sessionJSON = window.localStorage.getItem("session");
        if (!sessionJSON)
            return { success: false, error: "No Session in Local Storage" };

        const session = JSON.parse(sessionJSON) as Session;
        if (!isSession(session))
            return {
                success: false,
                error: "Session in Local Storage does not has the Session Shape",
            };

        return { success: true, data: session };
    } catch (JSONError) {
        return { success: false, error: "Failed to convert Session from json" };
    }
};
