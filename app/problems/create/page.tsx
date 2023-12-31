"use client";

import { useCallback, useReducer } from "react";
import { createProblem } from "@/services/problem/problems";
import Input from "@/components/ui/Input/Input";
import Select from "@/components/ui/Select/Select";
import { DIFFICULTIES } from "@/components/Problems/SearchBar/SearchBar";
import Problems from "@/components/Problems/Problems";
import Label from "@/components/ui/Label/Label";
import Button from "@/components/ui/Button/Button";
import { Problem } from "@/services/problem/types";

const INITIAL: Problem = {
    title: "",
    difficulty: "easy",
    tags: [""],
    inputExample: "",
    outputExample: "",
    description: "",
};

type Action =
    | {
          type: "update_tags";
          payload: {
              value: string;
          };
      }
    | {
          type: "update";
          payload: {
              name: string;
              value: string;
          };
      };

const reducer = (state: Problem, action: Action): Problem => {
    switch (action.type) {
        case "update_tags": {
            const tags = action.payload.value.split(/,| /);
            return {
                ...state,
                tags,
            };
        }

        case "update":
            const { name, value } = action.payload;
            return {
                ...state,
                [name]: value,
            };
        default:
            return INITIAL;
    }
};

const CreateProblemPage = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL);

    const handleClick = useCallback(async () => {
        const problemResult = await createProblem(state);
        if (!problemResult.success) throw new Error(problemResult.error);
    }, []);

    const createHandleChange = useCallback((name: string) => {
        const handleChange = (name: string, value: string) => {
            name === "tags"
                ? dispatch({
                      type: "update_tags",
                      payload: { value },
                  })
                : dispatch({
                      type: "update",
                      payload: {
                          name,
                          value,
                      },
                  });
        };

        return (value: string) => {
            handleChange(name, value);
        };
    }, []);

    return (
        <div className="problem-grid">
            <div
                className="box-container box border glass"
                style={{ gridRow: "span 2" }}
            >
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
            </div>

            <div
                className="box-container box border glass"
                style={{ gridRow: "span 2" }}
            >
                <Button handleClick={handleClick} variant="primary">
                    Create Problem
                </Button>
            </div>

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
