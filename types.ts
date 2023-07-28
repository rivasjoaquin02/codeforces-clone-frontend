export interface Problem {
    title: string;
    description: string;
    example_input: string;
    example_output: string;
    tags: Array<string>;
    difficulty: "easy" | "medium" | "hard";
}

export interface ProblemDB extends Problem {
    authorId: string;
    id: string;
}
