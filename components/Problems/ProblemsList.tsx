"use client";

import { Problem, ProblemDB } from "@/types";
import Problems from "./Problems";

import { useState } from "react";

interface Props {
    problems: Array<ProblemDB>;
}

const ProblemsList = ({ problems }: Props) => {
    const [filteredProblems, setFilteredProblems] =
        useState<Array<ProblemDB>>(problems);

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
            <Problems.SearchBar handleChange={filterProblems} />
            <Problems.Table problems={filteredProblems} />
        </>
    );
};

export default ProblemsList;
