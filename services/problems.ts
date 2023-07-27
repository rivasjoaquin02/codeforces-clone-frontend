import axios from "axios";
import { getToken } from "@/services/session";

interface Problem {
    title: string;
    description: string;
    example_input: string;
    example_output: string;
    tags: Array<string>;
    difficulty: string;
}

const baseUrl = `http://127.0.0.1:8000/problems/`;

export const createProblem = async (problem: Problem) => {
    if (
        !problem.title ||
        !problem.difficulty ||
        !problem.tags ||
        !problem.example_input ||
        !problem.example_output ||
        !problem.description
    )
        throw new Error("Field is missing");

    const { access_token, token_type } = getToken();

    const { data } = await axios.post(`${baseUrl}/create`, problem, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token_type} ${access_token}`,
        },
    });
    return data;
};

export const getProblem = async (id: string) => {
    if (!id) throw new Error("Problem ID is missing");

    const { data } = await axios.get(`${baseUrl}/${id}`);
    return data;
};
