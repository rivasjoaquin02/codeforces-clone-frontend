"use client";

import { useState } from "react";
import { ProblemDB } from "@/types";
import Problems from "@/components/Problems/Problems";

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
        example_input: inputExample,
        example_output: outputExample,
        tags,
    } = problem;

    return (
        <>
            <Problems.BoxTitleDifficultyTags
                title={title}
                difficulty={difficulty}
                tags={tags}
            />
            <Problems.BoxSubmitSolution />

            <Problems.BoxCode value={code} handleChange={setCode} />

            <Problems.BoxDescription
                description={description}
                style={{ gridRow: "span 2" }}
            />
            <Problems.BoxInputOutput
                inputExample={inputExample}
                outputExample={outputExample}
            />
        </>
    );
};

export default ProblemSolution;
