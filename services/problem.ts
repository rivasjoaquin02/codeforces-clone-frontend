import axios from "axios";

interface Problem {
    title: string ;
    description: string;
    example_input: string;
    example_output: string;
    tags: Array<string>;
    difficulty: string;
}

const baseUrl = `http://127.0.0.1:8000/problems/create`;

const createProblem = async (problem: Problem) => {
    if (
        !problem.title ||
        !problem.difficulty ||
        !problem.tags ||
        !problem.example_input ||
        !problem.example_output ||
        !problem.description
    )
        throw new Error("Field is missing");

    const accessTokenJSON = window.localStorage.getItem("access_token");

    if (!accessTokenJSON)
        throw new Error("There is not Token in the LocalStorage");

    const { access_token, token_type } = JSON.parse(accessTokenJSON);

    const { data } = await axios.post(baseUrl, problem, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token_type} ${access_token}`,
        },
    });
    return data;
};

export default { createProblem };
