import { ProblemDB } from "@/types";
import Problems from "@/components/Problems/Problems";
import Pagination from "@/components/ui/Pagination/Pagination";
import { getProblems } from "@/services/problems";

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

const isMatch = (
    problem: ProblemDB,
    title?: string,
    difficulty?: string
): boolean => {
    let match = true;
    if (problem) {
        if (title)
            match = problem.title.toLowerCase().includes(title.toLowerCase());
        if (difficulty) match = problem.difficulty === difficulty;
    }
    return match;
};

const ProblemsPage = async ({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) => {
    const page = searchParams["page"] ?? "1";
    const per_page = searchParams["per_page"] ?? "10";

    const filterByTitle = searchParams["title"] ?? "";
    const filterByDifficulty = searchParams["difficulty"] ?? "";

    const start = (Number(page) - 1) * Number(per_page);
    const end = start + Number(per_page);

    // const problems = await getProblems();
    const problems: Array<ProblemDB> = Array(30)
        .fill({ ...MOCH_PROBLEM })
        .map((v, idx) => ({
            ...v,
            id: idx.toString(),
        }));
    const entries = problems
        .slice(start, end)
        .filter((problem) =>
            isMatch(problem, filterByTitle[0], filterByDifficulty[0])
        );

    // console.log(problems);
    // console.log(page, per_page, start, end);

    return (
        <>
            <Problems.SearchBar />
            <Problems.Table problems={entries} />
            <Pagination
                hasPrevPage={start > 0}
                hasNextPage={end < problems.length}
            />
        </>
    );
};

export default ProblemsPage;
