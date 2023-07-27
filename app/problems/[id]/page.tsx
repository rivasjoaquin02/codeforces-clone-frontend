import ProblemInfo from "@/components/Problems/ProblemInfo";
import { Problem } from "@/types";

type Props = {
    params: {
        id: string;
    };
};

const getProblem = async () => {};

const ProblemIdPage = async ({ params }: Props) => {
    const problem = await getProblem();

    const problem2: Problem = {
        title: "Title Example",
        description: "Description ....",
        difficulty: "easy",
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

    return <ProblemInfo data={problem2} />;
};

export default ProblemIdPage;
