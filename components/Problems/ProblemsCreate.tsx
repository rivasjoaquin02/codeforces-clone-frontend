"use client";

import { useState } from "react";
import problemService from "@/services/problem";

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
            const response = await problemService.createProblem(problem);
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
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
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
                        <select
                            name="difficulty"
                            id="difficulty"
                            value={difficulty}
                            defaultValue="easy"
                            onChange={(e) => setDifficulty(e.target.value)}
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
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
                        <input
                            type="text"
                            id="tags"
                            value={tags}
                            onChange={(e) => setTags(e.target.value.split(","))}
                        />
                    </div>
                </div>

                {/* submit */}
                <div className="box border" style={{ gridColumn: "span 2" }}>
                    {errorMessage && (
                        <span className="error-message box border">
                            {errorMessage}
                        </span>
                    )}
                    <button
                        className="btn btn-primary border"
                        onClick={handleClick}
                    >
                        Submit
                    </button>
                </div>

                {/* description */}
                <div
                    className="box border"
                    style={{ gridColumn: "span 2", gridRow: "span 3" }}
                >
                    <label htmlFor="description">
                        <h3>Problem Description</h3>
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
                        <input
                            type="text"
                            id="input-example"
                            value={inputExample}
                            onChange={(e) => setInputExample(e.target.value)}
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
                        <input
                            type="text"
                            id="output-example"
                            value={outputExample}
                            onChange={(e) => setOutputExample(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemsCreate;
