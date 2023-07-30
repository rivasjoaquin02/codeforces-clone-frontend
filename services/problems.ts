import axios from "axios";
import { isSession } from "@/services/session";
import { Problem, ProblemDB, Result } from "@/types";
import { Session } from "inspector";

const baseUrl = `http://127.0.0.1:8000/problems`;

const isProblem = (dict: any): dict is Problem => {
    return (
        dict &&
        typeof dict.title === "string" &&
        typeof dict.difficulty === "string" &&
        Array.isArray(dict.tags) &&
        typeof dict.inputExample === "string" &&
        typeof dict.outputExample === "string" &&
        typeof dict.description === "string"
    );
};

const isProblemDB = (dict: any): dict is ProblemDB => {
    return (
        dict &&
        typeof dict.id === "string" &&
        typeof dict.authorId === "string" &&
        typeof dict.title === "string" &&
        typeof dict.difficulty === "string" &&
        Array.isArray(dict.tags) &&
        typeof dict.inputExample === "string" &&
        typeof dict.outputExample === "string" &&
        typeof dict.description === "string"
    );
};

const isArrayOfProblemDB = (dict: any): dict is Array<ProblemDB> => {
    return Array.isArray(dict) && dict.every((item) => isProblemDB(item));
};

export const createProblem = async (
    problem: Problem,
    session: Session
): Promise<Result<Problem>> => {
    if (!isProblem(problem))
        return {
            success: false,
            error: "Problem in wrong format than expected",
        };

    if (!isSession(session))
        return {
            success: false,
            error: "Session in wrong format than expected",
        };

    try {
        const { data } = await axios.post(`${baseUrl}/create`, problem, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `${session.token_type} ${session.access_token}`,
            },
        });
        if (!data)
            return {
                success: false,
                error: "Problem in wrong format than expected",
            };
    } catch (e) {
        const error = e as Error;
        return { success: false, error: error.message };
    }
    return { success: true, data: problem };
};

export const getProblems = async (): Promise<Result<Array<ProblemDB>>> => {
    try {
        const { data } = await axios.get(baseUrl);
        if (!isArrayOfProblemDB(data))
            return {
                success: false,
                error: "Problem in wrong format than expected",
            };

        return { success: true, data };
    } catch (e) {
        const error = e as Error;
        return { success: false, error: error.message };
    }
};

export const getProblemById = async (
    id: string
): Promise<Result<ProblemDB>> => {
    if (!id) return { success: false, error: "Problem ID is missing" };

    try {
        const { data } = await axios.get(`${baseUrl}/${id}`);
        if (!isProblemDB(data))
            return {
                success: false,
                error: "Problem in wrong format than expected",
            };

        return { success: true, data };
    } catch (e) {
        const error = e as Error;
        return { success: false, error: error.message };
    }
};
