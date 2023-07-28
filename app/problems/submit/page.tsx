
import ProblemSolution from "@/components/Problems/ProblemSolution";
import { ProblemDB } from "@/types";

const getProblem = async (): Promise<ProblemDB> => {
    return {
        title: "Title Example",
        description: "Description ....",
        difficulty: "medium",
        example_input: "6 5 43 2 1 1 ",
        example_output: " 3 4 5 34 2 1",
        id: "64c18c406486fc32c9e2dc62",
        authorId: "64c18c406486fc32c9e2dc62",
        tags: [
            "implementation",
            "math",
            "graphs",
            "greddy",
            "dynamic programming",
        ],
    };
};

const ProblemSolutionPage = async () => {
    const problem = await getProblem();

    return (
        <div className="submit-solution-grid">
            <ProblemSolution problem={problem} />
        </div>
    );
};

export default ProblemSolutionPage;
