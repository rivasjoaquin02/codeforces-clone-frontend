import { Problem } from "@/types";

interface Props {
    data: Problem;
}

const ProblemInfo = ({ data }: Props) => {
    const {
        title,
        difficulty,
        tags,
        example_input,
        example_output,
        description,
    } = data;

    return (
        <div className="problems">
            <div className="create-problems">
                {/* title difficulty tags */}
                <div
                    className="problem-info box border"
                    style={{ gridRow: "span 2" }}
                >
                    <label htmlFor="title">
                        <h3>{title}</h3>
                    </label>

                    <label htmlFor="difficulty">
                        <h3>Difficulty</h3>
                    </label>
                    <div
                        style={{
                            display: "flex",
                            gap: "5px",
                        }}
                    >
                        <span>easy</span>
                        <span>medium</span>
                        <span>hard</span>
                    </div>

                    <label htmlFor="tags">
                        <h3>Tags</h3>
                    </label>
                    <div
                        style={{
                            display: "flex",
                            gap: "5px",
                            flexWrap: "wrap",
                        }}
                    >
                        {tags.map((tag) => (
                            <div key={tag} className="tag">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>

                {/* submit */}
                <div className="box border" style={{ gridColumn: "span 2" }}>
                    <button className="btn btn-primary border">
                        Submit Solution
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
                    <textarea readOnly name="description" id="description">
                        {description}
                    </textarea>
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
                    >
                        {example_input}
                    </textarea>

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
                    >
                        {example_output}
                    </textarea>
                </div>
            </div>
        </div>
    );
};

export default ProblemInfo;
