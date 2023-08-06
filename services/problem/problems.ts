import axios from "axios";
import { isArrayOfProblemDB, isProblem, isProblemDB } from "./validate";
import { Problem, ProblemDB } from "./types";
import { Result } from "@/types";
import { getSession } from "../session/session";

const API_URL = process.env.API_URL || "";
const baseUrl = `${API_URL}/problems`;

export const createProblem = async (
    problem: Problem
): Promise<Result<Problem>> => {
    if (!isProblem(problem))
        return {
            success: false,
            error: "Problem in wrong format than expected",
        };

    const sessionResult = getSession();
    if (!sessionResult.success)
        return {
            success: false,
            error: sessionResult.error,
        };
    const session = sessionResult.data;

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
        const { data } = await axios.get<Array<ProblemDB>>(baseUrl);
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
        const { data } = await axios.get<ProblemDB>(`${baseUrl}/${id}`);
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
