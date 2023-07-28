"use client";

import { Problem } from "@/types";
import ProblemsFilterBar from "@/components/Problems/ProblemsFilterBar";
import ProblemsTable from "./ProblemsTable";
import { useState } from "react";

interface Props {
    problems: Array<Problem>;
}

const ProblemsList = ({ problems }: Props) => {
    const [filteredProblems, setFilteredProblems] =
        useState<Array<Problem>>(problems);

    const isMatch = (
        problem: Problem,
        title?: string,
        difficulty?: string
    ): boolean => {
        let match = true;
        if (problem) {
            if (title)
                match = problem.title
                    .toLowerCase()
                    .includes(title.toLowerCase());
            if (difficulty) match = problem.difficulty === difficulty;
        }
        return match;
    };

    const filterProblems = (title?: string, difficulty?: string) => {
        setFilteredProblems(
            problems.filter((problem) => isMatch(problem, title, difficulty))
        );
        console.log(filteredProblems);
    };

    return (
        <>
            <ProblemsFilterBar handleChange={filterProblems} />
            <ProblemsTable problems={filteredProblems} />
        </>
    );
};

export default ProblemsList;
