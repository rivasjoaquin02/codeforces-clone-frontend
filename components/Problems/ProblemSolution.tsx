"use client";

import { useState } from "react";
import Problems from "@/components/Problems/Problems";
import { ProblemDB } from "@/services/problem/types";

interface Props {
    problem: ProblemDB;
}

const ProblemSolution = ({ problem }: Props) => {
    const [code, setCode] = useState<string>("");

    const {
        id,
        authorId,
        title,
        description,
        difficulty,
        inputExample: inputExample,
        outputExample: outputExample,
        tags,
    } = problem;

    return (
        <>
            <div className="problem-info">
                <Problems.BoxTitleDifficultyTags
                    title={title}
                    difficulty={difficulty}
                    tags={tags}
                />
                <Problems.BoxDescription
                    description={description}
                    style={{ gridRow: "span 2" }}
                />
                <Problems.BoxInputOutput
                    inputExample={inputExample}
                    outputExample={outputExample}
                />
            </div>
            <div className="problem-solution">
                <Problems.BoxCode value={code} handleChange={setCode} />
                <Problems.BoxSubmitSolution />
            </div>
        </>
    );
};

export default ProblemSolution;
