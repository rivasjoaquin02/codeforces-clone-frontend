import { Problem, ProblemDB } from "./types";

export const isProblem = (dict: any): dict is Problem => {
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

export const isProblemDB = (dict: any): dict is ProblemDB => {
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

export const isArrayOfProblemDB = (dict: any): dict is Array<ProblemDB> => {
    return Array.isArray(dict) && dict.every((item) => isProblemDB(item));
};
