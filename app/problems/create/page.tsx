"use client";

import { useReducer } from "react";
import { createProblem } from "@/services/problems";
import Input from "@/components/ui/Input/Input";
import Select from "@/components/ui/Select/Select";
import { DIFFICULTIES } from "@/components/Problems/SearchBar/SearchBar";
import Problems from "@/components/Problems/Problems";
import BoxContainer from "@/components/BoxContainer";
import Label from "@/components/ui/Label/Label";
import { Problem } from "@/types";

const INITIAL = {
    title: "",
    difficulty: "",
    tags: [],
    inputExample: "",
    outputExample: "",
    description: "",
};

type Action = {
    type: string;
    payload: {
        label: string;
        value: string;
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            return INITIAL;

        case "update_tags": {
            const tags = action.payload.value.split(/,| /);
            return {
                ...state,
                tags,
            };
        }

        case "update":
            const { key, value } = action.payload;
            return {
                ...state,
                [key]: value,
            };
    }
};

const CreateProblemPage = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL);

    const handleClick = async () => {
        const problem = {
            title,
            description,
            example_input: inputExample,
            example_output: outputExample,
            tags,
            difficulty,
        };

        try {
            const response = await createProblem(problem);
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("An unknown error occurred");
            }
            setTimeout(() => {
                setErrorMessage("");
            }, 5000);
        }
    };

    const createHandleChange = (key: string) => {
        const handleChange = (key: string, value: string) => {
            key === "tags"
                ? dispatch({
                      type: "update_tags",
                      payload: { value },
                  })
                : dispatch({
                      type: "update",
                      payload: {
                          key,
                          value,
                      },
                  });
        };

        return (value: string) => {
            handleChange(key, value);
        };
    };

    // console.log(state);

    return (
        <div className="problem-grid">
            <BoxContainer style={{ gridRow: "span 2" }}>
                <Label id="title">Title</Label>
                <Input
                    id="title"
                    value={state.title}
                    handleChange={createHandleChange("title")}
                />

                <Label id="difficulty">Difficulty</Label>
                <Select
                    value={state.difficulty}
                    handleChange={createHandleChange("difficulty")}
                    options={DIFFICULTIES}
                />

                <Label id="tags">Tags</Label>
                <Input
                    id="tags"
                    value={state.tags}
                    handleChange={createHandleChange("tags")}
                />
            </BoxContainer>

            <Problems.BoxSubmitSolution style={{ gridColumn: "span 2" }} />

            <Problems.BoxDescription
                description={state.description}
                handleChange={createHandleChange("description")}
                style={{ gridColumn: "span 2", gridRow: "span 3" }}
            />

            <Problems.BoxInputOutput
                inputExample={state.inputExample}
                handleChangeInput={createHandleChange("inputExample")}
                outputExample={state.outputExample}
                handleChangeOutput={createHandleChange("outputExample")}
            />
        </div>
    );
};

export default CreateProblemPage;
