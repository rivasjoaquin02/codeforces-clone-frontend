import ProblemInfo from "@/components/Problems/ProblemInfo";
import { getProblemById, getProblems } from "@/services/problems";
import { ProblemDB } from "@/types";

type Props = {
    params: {
        id: string;
    };
};

export const generateStaticParams = async () => {
    // function for generate static paths at build time
    try {
        const problems = await getProblems();
        return problems.map((problem) => ({ id: problem.id }));
    } catch (e) {
        console.log(e);
    }
};

const getProblem = async (id: string): Promise<ProblemDB | undefined> => {
    try {
        const problem = await getProblemById(id);
        return problem;
    } catch (e) {
        console.log(e);
    }
};

const ProblemIdPage = async ({ params }: Props) => {
    const problem = await getProblem(params.id);

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
