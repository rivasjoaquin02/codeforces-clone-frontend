import Button from "@/components/ui/Button/Button";
import Tag from "@/components/ui/Tag/Tag";
import TextArea from "@/components/ui/TextArea/TextArea";
import { Problem } from "@/types";

type Props = {};

const ProblemSolution = async () => {
    const problem: Problem = {
        title: "Title Example",
        description: "Description ....",
        difficulty: "medium",
        example_input: "6 5 43 2 1 1 ",
        example_output: " 3 4 5 34 2 1",
        id: "64c18c406486fc32c9e2dc62",
        authorId: "64c18c406486fc32c9e2dc62",
        tags: [
            "implementation",
            "math",
            "graphs",
            "greddy",
            "dynamic programming",
        ],
    };

    return (
        <div className="problems">
            <div className="submit-solution">
                {/* title difficulty tags */}
                <div
                    className="problem-info box border"
                    style={{ gridRow: "span 2" }}
                >
                    <div style={{ display: "flex", gap: "15px" }}>
                        <h3>{problem.title}</h3>

                        <div className="tag-container">
                            <Tag selected={problem.difficulty === "easy"}>
                                easy
                            </Tag>
                            <Tag selected={problem.difficulty === "medium"}>
                                medium
                            </Tag>
                            <Tag selected={problem.difficulty === "hard"}>
                                hard
                            </Tag>
                        </div>
                    </div>

                    <h3>Tags</h3>
                    <div className="tag-container">
                        {problem.tags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </div>
                </div>

                {/* submit */}
                <div className="box border">
                    <Button variant="primary">Submit Solution</Button>
                </div>

                {/* code */}
                <div
                    className="box border"
                    style={{
                        gridRow: "span 4",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <select
                        name="lang"
                        id="lang"
                        defaultValue={"cpp"}
                        className="box border"
                        style={{
                            color: "var(--text-color)",
                            width: "fit-content",
                            height: "fit-content",
                        }}
                    >
                        <option value="cpp">c++</option>
                        <option value="python">python</option>
                        <option value="java">java</option>
                    </select>
                    {/* <TextArea id="description" value={} /> */}
                    <textarea name="description" id="description" rows={53} />
                </div>

                {/* description */}
                <div className="box border" style={{ gridRow: "span 2" }}>
                    <label htmlFor="description">
                        <h3>Problem Description</h3>
                    </label>
                    <textarea
                        readOnly
                        name="description"
                        id="description"
                        value={"sdfsdf"}
                        rows={30}
                    />
                </div>

                {/* input output example */}
                <div className="box border">
                    <label htmlFor="input-example">
                        <h3>Input Example</h3>
                    </label>
                    <textarea
                        name="input-example"
                        id="input-example"
                        readOnly
                        style={{
                            boxSizing: "border-box",
                            padding: "5px",
                            height: "fit-content",
                        }}
                        value={"sdfsdf"}
                    />

                    <label htmlFor="output-example">
                        <h3>Output Example</h3>
                    </label>
                    <textarea
                        name="output-example"
                        id="output-example"
                        readOnly
                        style={{
                            boxSizing: "border-box",
                            padding: "5px",
                            height: "fit-content",
                        }}
                        value={"sdsdf"}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProblemSolution;
