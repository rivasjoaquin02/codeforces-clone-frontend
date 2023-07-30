import { Problem } from "@/types";
import Problems from "./Problems";

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
            <div className="problem-grid">
                <Problems.BoxTitleDifficultyTags
                    title={title}
                    difficulty={difficulty}
                    tags={tags}
                />

                <Problems.BoxSubmitSolution style={{ gridColumn: "span 2" }} />

                <Problems.BoxDescription
                    description={description}
                    style={{ gridColumn: "span 2", gridRow: "span 3" }}
                />

                <Problems.BoxInputOutput
                    inputExample={example_input}
                    outputExample={example_output}
                />
            </div>
        </div>
    );
};

export default ProblemInfo;
