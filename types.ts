export interface Problem {
    id: string;
    authorId: string;
    title: string;
    description: string;
    example_input: string;
    example_output: string;
    tags: Array<string>;
    difficulty: string;
}