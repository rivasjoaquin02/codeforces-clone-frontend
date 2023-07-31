import Problems from "@/components/Problems/Problems";
import SearchBarSkeleton from "@/components/Problems/SearchBar/SearchBarSkeleton";
import TableSkeleton from "@/components/Problems/Table/TableSkeleton";
import AcceptanceBar from "@/components/ui/AcceptanceBars/AcceptanceBar";
import Calendar from "@/components/ui/Calendar/Calendar";
import Pagination from "@/components/ui/Pagination/Pagination";
import { getProblems } from "@/services/problem/problems";
import { ProblemDB } from "@/services/problem/types";

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

const TAGS = [
    "Array",
    "String",
    "Tree",
    "Graph",
    "Dynamic Programming",
    "Math",
    "Greedy",
    "Depth-first Search",
    "Breadth-first Search",
    "Binary Search",
    "Hash Table",
];

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

    const problemsResult = await getProblems();
    if (!problemsResult.success)
        return <div>Failed to fetch problems: {problemsResult.error}</div>;

    const entries = problemsResult.data
        .slice(start, end)
        .filter((problem) =>
            isMatch(problem, filterByTitle[0], filterByDifficulty[0])
        );

    return (
        <>
            {/* <SearchBarSkeleton /> */}
            <Problems.SearchBar
                datalist={entries.map((entry) => entry.title)}
                tags={TAGS}
            />
            <div className="table-container">
                <div className="table-left">
                    <Calendar />
                    <AcceptanceBar />
                </div>
                {/* <TableSkeleton /> */}
                <Problems.Table problems={entries} />
            </div>
            <Pagination
                hasPrevPage={start > 0}
                hasNextPage={end < problemsResult.data.length}
            />
        </>
    );
};

export default ProblemsPage;
