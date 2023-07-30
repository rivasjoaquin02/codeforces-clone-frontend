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
            <Tag difficulty={difficulty === "easy" ? difficulty : undefined}>
                easy
            </Tag>
            <Tag difficulty={difficulty === "medium" ? difficulty : undefined}>
                medium
            </Tag>
            <Tag difficulty={difficulty === "hard" ? difficulty : undefined}>
                hard
            </Tag>
        </div>
        <h3>Tags</h3>
        <div className="tag-container">
            {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
            ))}
        </div>
    </BoxContainer>
);

export default BoxTitleDifficultyTags;
