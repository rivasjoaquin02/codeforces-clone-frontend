import { Problem } from "@/services/problem/types";
import Problems from "./Problems";

const ProblemInfo = ({ data }: {
    data: Problem;
}) => {
    const {
        title,
        difficulty,
        tags,
        inputExample,
        outputExample,
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
                    inputExample={inputExample}
                    outputExample={outputExample}
                />
            </div>
        </div>
    );
};

export default ProblemInfo;
