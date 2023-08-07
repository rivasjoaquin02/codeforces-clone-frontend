import Problems from "@/components/Problems/Problems";
import TableSkeleton from "@/components/Problems/Table/TableSkeleton";

import AcceptanceBar from "@/components/ui/AcceptanceBars/AcceptanceBar";
import Calendar from "@/components/ui/Calendar/Calendar";
import Pagination from "@/components/ui/Pagination/Pagination";
import { getProblems } from "@/services/problem/problems";
import { ProblemDB } from "@/services/problem/types";
import { Suspense } from "react";

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

const sortByTitle = (a: ProblemDB, b: ProblemDB): number =>
    a.title > b.title ? 1 : -1;

const sortByDifficulty = (a: ProblemDB, b: ProblemDB): number => {
    if (a.difficulty === "easy" && b.difficulty === "medium") return -1;
    if (a.difficulty === "easy" && b.difficulty === "hard") return -1;
    if (a.difficulty === "medium" && b.difficulty === "hard") return -1;
    if (a.difficulty === "medium" && b.difficulty === "easy") return 1;
    if (a.difficulty === "hard" && b.difficulty === "easy") return 1;
    if (a.difficulty === "hard" && b.difficulty === "medium") return 1;
    return 0;
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

const sortByX = (caracter?: string) => {
    if (caracter === "title") return sortByTitle;
    else if (caracter === "difficulty") return sortByDifficulty;
    return () => 0;
};

const ProblemsPage = async ({
    searchParams,
}: {
    searchParams: { [key: string]: string | undefined };
}) => {
    const page = searchParams["page"] ?? "1";
    const per_page = searchParams["per_page"] ?? "10";

    const filterByTitle = searchParams["title"] ?? "";
    const filterByDifficulty = searchParams["difficulty"] ?? "";

    const sortedBy = searchParams["sortBy"];

    const start = (Number(page) - 1) * Number(per_page);
    const end = start + Number(per_page);

    const problemsResult = await getProblems();
    if (!problemsResult.success)
        return <div>Failed to fetch problems: {problemsResult.error}</div>;

    const filteredProblems = problemsResult.data
        .slice(start, end)
        .filter((problem) =>
            isMatch(problem, filterByTitle[0], filterByDifficulty[0])
        )
        .sort(sortByX(sortedBy));

    let amountByCategory = {
        easy: 0,
        medium: 0,
        hard: 0,
    };

    problemsResult.data.forEach((problem) => {
        if (problem.difficulty === "easy") amountByCategory.easy += 1;
        else if (problem.difficulty === "medium") amountByCategory.medium += 1;
        else if (problem.difficulty === "hard") amountByCategory.hard += 1;
    });

    return (
        <>
            <Problems.SearchBar
                datalist={filteredProblems.map((entry) => entry.title)}
                tags={TAGS}
            />
            <Suspense fallback={<TableSkeleton />}>
                <div className="table-container">
                    <div className="table-container__left">
                        <Calendar />
                        <AcceptanceBar amountByCategory={amountByCategory} />
                    </div>
                    {/* <TableSkeleton /> */}
                    <Problems.Table problems={filteredProblems} />
                </div>
            </Suspense>
            <Pagination
                hasPrevPage={start > 0}
                hasNextPage={end < problemsResult.data.length}
            />
        </>
    );
};

export default ProblemsPage;
