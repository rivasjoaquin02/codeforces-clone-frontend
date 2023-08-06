import BoxContainer from "../BoxContainer";
import Tag from "../ui/Tag/Tag";

interface Props {
    title: string;
    difficulty: "easy" | "medium" | "hard";
    tags: Array<string>;
}

const BoxTitleDifficultyTags = ({ title, difficulty, tags }: Props) => (
    <BoxContainer style={{ gridRow: "span 2" }}>
        <h3>{title}</h3>
        <h3>Difficulty</h3>
        <div className="tag-container">
            <Tag
                variant="difficulty"
                mode={difficulty === "easy" ? "easy" : "disabled"}
            />
            <Tag
                variant="difficulty"
                mode={difficulty === "medium" ? "medium" : "disabled"}
            />
            <Tag
                variant="difficulty"
                mode={difficulty === "hard" ? "hard" : "disabled"}
            />
        </div>
        <h3>Tags</h3>
        <div className="tag-container">
            {tags.map((tag) => (
                <Tag variant="normal" key={tag}>
                    {tag}
                </Tag>
            ))}
        </div>
    </BoxContainer>
);

export default BoxTitleDifficultyTags;
