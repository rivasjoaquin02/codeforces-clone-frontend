"use client";

import { useState } from "react";
import { createProblem } from "@/services/problems";
import Button from "../ui/Button/Button";
import Select from "../ui/Select/Select";
import { DIFFICULTIES } from "./ProblemsFilterBar";
import Input from "../ui/Input/Input";
import TextArea from "../ui/TextArea/TextArea";

const ProblemsCreate = () => {
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<string>("");
    const [tags, setTags] = useState<Array<string>>([""]);
    const [inputExample, setInputExample] = useState<string>("");
    const [outputExample, setOutputExample] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const [errorMessage, setErrorMessage] = useState<string>("");

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

    console.log(tags);

    return (
        <div className="problems">
            <div className="create-problems">
                {/* title difficulty tags */}
                <div
                    className="problem-info box border"
                    style={{ gridRow: "span 2" }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                        }}
                    >
                        <label htmlFor="title">
                            <h3>Title</h3>
                        </label>
                        <Input
                            id="title"
                            value={title}
                            handleChange={setTitle}
                        />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                        }}
                    >
                        <label htmlFor="difficulty">
                            <h3>Difficulty</h3>
                        </label>
                        <Select
                            id="difficulty"
                            value={difficulty}
                            defaultValue="easy"
                            handleChange={setDifficulty}
                            options={DIFFICULTIES}
                        />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                        }}
                    >
                        <label htmlFor="tags">
                            <h3>Tags</h3>
                        </label>
                        <Input id="tags" value={tags} handleChange={setTags} />
                    </div>
                </div>

                {/* submit */}
                <div className="box border" style={{ gridColumn: "span 2" }}>
                    {errorMessage && (
                        <span className="error-message box border">
                            {errorMessage}
                        </span>
                    )}
                    <Button variant="primary">Submit</Button>
                </div>

                {/* description */}
                <div
                    className="box border"
                    style={{ gridColumn: "span 2", gridRow: "span 3" }}
                >
                    <label htmlFor="description">
                        <h3>Problem Description</h3>
                    </label>
                    <TextArea
                        id="description"
                        value={description}
                        handleChange={setDescription}
                    />
                </div>

                {/* input output example */}
                <div className="box border">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                        }}
                    >
                        <label htmlFor="input-example">
                            <h3>Input Example</h3>
                        </label>
                        <Input
                            id="input-example"
                            value={inputExample}
                            handleChange={setInputExample}
                        />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                        }}
                    >
                        <label htmlFor="output-example">
                            <h3>Output Example</h3>
                        </label>
                        <Input
                            id="output-example"
                            value={outputExample}
                            handleChange={setOutputExample}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemsCreate;
