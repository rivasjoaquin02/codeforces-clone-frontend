"use client";

import { Problem } from "@/types";
import ProblemsFilterBar from "@/components/Problems/ProblemsFilterBar";
import ProblemsTable from "./ProblemsTable";
import { useState } from "react";

interface Props {
    problems: Array<Problem>;
}

const isMatch = (
    problem: Problem,
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

const ProblemsList = ({ problems }: Props) => {
    const [filteredProblems, setFilteredProblems] =
        useState<Array<Problem>>(problems);

    const filterProblems = (title?: string, difficulty?: string) => {
        setFilteredProblems(
            problems.filter((problem) => isMatch(problem, title, difficulty))
        );
        console.log(filteredProblems);
    };

    return (
        <div className="problems">
            <ProblemsFilterBar handleChange={filterProblems} />
            <ProblemsTable problems={filteredProblems} />
        </div>
    );
};

export default ProblemsList;
