export interface Problem {
    title: string;
    description: string;
    inputExample: string;
    outputExample: string;
    tags: Array<string>;
    difficulty: "easy" | "medium" | "hard";
}

export interface ProblemDB extends Problem {
    authorId: string;
    id: string;
}

export type Result =
    | [data: ProblemDB, error: null]
    | [data: null, error: string];
