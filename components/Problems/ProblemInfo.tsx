import { Problem } from "@/types";
import ButtonRedirect from "@/components/ui/Button/ButtonRedirect";
import TextArea from "@/components/ui/TextArea/TextArea";
import Tag from "@/components/ui/Tag/Tag";

interface Props {
    data: Problem;
}

const ProblemInfo = ({ data }: Props) => {
    // const submitPath = `${req.url}/submit`;
    const submitPath = "submit";

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
                    <div className="tag-container">
                        <Tag selected={difficulty === "easy"}>easy</Tag>
                        <Tag selected={difficulty === "medium"}>medium</Tag>
                        <Tag selected={difficulty === "hard"}>hard</Tag>
                    </div>

                    <label htmlFor="tags">
                        <h3>Tags</h3>
                    </label>
                    <div className="tag-container">
                        {tags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </div>
                </div>

                {/* submit */}
                <div className="box border" style={{ gridColumn: "span 2" }}>
                    <ButtonRedirect redirectUrl={submitPath} variant="primary">
                        Submit Solution
                    </ButtonRedirect>
                </div>

                {/* description */}
                <div
                    className="box border"
                    style={{ gridColumn: "span 2", gridRow: "span 3" }}
                >
                    <label htmlFor="description">
                        <h3>Problem Description</h3>
                    </label>
                    {/* <TextArea id="description" value={description} readOnly /> */}
                    <textarea
                        readOnly
                        name="description"
                        id="description"
                        value={description}
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
                        value={example_input}
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
                        value={example_output}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProblemInfo;
