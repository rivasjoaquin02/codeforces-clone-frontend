import axios from "axios";
import { getSession } from "@/services/session";
import { Problem, ProblemDB } from "@/types";

const baseUrl = `http://127.0.0.1:8000/problems`;

export const createProblem = async (problem: Problem) => {
    if (
        !problem.title ||
        !problem.difficulty ||
        !problem.tags ||
        !problem.inputExample ||
        !problem.outputExample ||
        !problem.description
    )
        throw new Error("Field is missing");

    const { access_token, token_type } = getSession();

    if (!access_token) throw new Error("Access token is missing");

    const { data } = await axios.post(`${baseUrl}/create`, problem, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token_type} ${access_token}`,
        },
    });

    if (!data) throw new Error("Problem creation failed");

    return data;
};

export const getProblems = async (): Promise<Array<ProblemDB>> => {
    const response = await axios.get(baseUrl);
    const data = response.data as Array<ProblemDB>;
    return data;
};

export const getProblemById = async (id: string): Promise<ProblemDB> => {
    if (!id) throw new Error("Problem ID is missing");
    const { data } = await axios.get(`${baseUrl}/${id}`);
    return data;
};
