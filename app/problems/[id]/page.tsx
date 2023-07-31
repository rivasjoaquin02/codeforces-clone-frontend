import ProblemInfo from "@/components/Problems/ProblemInfo";
import { getProblemById, getProblems } from "@/services/problem/problems";
import { ProblemDB } from "@/services/problem/types";

// export const generateStaticParams = async (): Promise<Array<{ id: string }> | undefined> => {
//     // function for generate static paths at build time
//     const problemsResult = await getProblems();
//     return problemsResult.data.map((problem) => ({ id: problem.id }));
// };

const getProblemWithId = async (id: string): Promise<ProblemDB | undefined> => {
    const problemResult = await getProblemById(id);
    if (!problemResult.success) throw new Error("Problem not found");
    return problemResult.data;
};

const ProblemIdPage = async ({
    params,
}: {
    params: {
        id: string;
    };
}) => {
    const problem = await getProblemWithId(params.id);

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
