import ProblemsList from "@/components/Problems/ProblemsList";
import { getProblems } from "@/services/problems";
import { ProblemDB } from "@/types";

const MOCH_PROBLEM: ProblemDB = {
    id: "1",
    authorId: "1",
    title: "Two Sum",
    difficulty: "easy",
    description:
        "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    example_input: "[2,7,11,15]",
    example_output: "[0,1]",
    tags: ["array", "hash table"],
};

const ProblemsPage = async ({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) => {
    const page = searchParams["page"] ?? "1";
    const per_page = searchParams["per_page"] ?? "10";

    const start = (Number(page) - 1) * Number(per_page);
    const end = start + Number(per_page);

    // const problems = await getProblems();
    const problems: Array<ProblemDB> = Array(30)
        .fill({ ...MOCH_PROBLEM })
        .map((v, idx) => ({
            ...v,
            id: idx.toString(),
        }));
    const entries = problems.slice(start, end);

    console.log(problems);
    // console.log(page, per_page, start, end);

    return (
        <ProblemsList
            problems={entries}
            hasPrevPage={start > 0}
            hasNextPage={end < problems.length}
        />
    );
};

export default ProblemsPage;
