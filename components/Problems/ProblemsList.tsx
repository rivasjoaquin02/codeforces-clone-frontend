"use client";

import { Problem, ProblemDB } from "@/types";
import Problems from "./Problems";

import { useState } from "react";
import Pagination from "../ui/Pagination/Pagination";

interface Props {
    problems: Array<ProblemDB>;
    hasPrevPage: boolean;
    hasNextPage: boolean;
}

const ProblemsList = ({ problems, hasPrevPage, hasNextPage }: Props) => {

    console.log(problems);
    

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
            <Pagination hasPrevPage={hasPrevPage} hasNextPage={hasNextPage} />
        </>
    );
};

export default ProblemsList;
