import ProblemInfo from "@/components/Problems/ProblemInfo";
import { getProblemById } from "@/services/problems";
import { Problem } from "@/types";

type Props = {
    params: {
        id: string;
    };
};

const getProblem = async (id: string): Promise<Problem | undefined> => {
    try {
        console.log(id);

        const problem = await getProblemById(id);
        return problem;
    } catch (e) {
        console.log(e);
    }
};

const ProblemIdPage = async ({ params }: Props) => {
    console.log(params.id);

    // const problem = await getProblem(params.id);

    const problem: Problem = {
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

    return (
        <>
            {problem ? (
                <ProblemInfo data={problem} />
            ) : (
                <div
                    className="error-message box border"
                    style={{ width: "fit-content" }}
                >
                    There is no such Problem
                </div>
            )}
        </>
    );
};

export default ProblemIdPage;
