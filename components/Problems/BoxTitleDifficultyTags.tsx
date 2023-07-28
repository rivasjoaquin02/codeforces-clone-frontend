import BoxContainer from "../BoxContainer";
import Input from "../ui/Input/Input";
import Tag from "../ui/Tag/Tag";

interface Props {
    title: string;
    difficulty: "easy" | "medium" | "hard";
    tags: Array<string>;
    handleChangeTitle?: (value: string) => void;
    handleChangeDifficulty?: (value: string) => void;
    handleChangeTags?: (values: Array<string>) => void;
}

const BoxTitleDifficultyTags = ({
    title,
    difficulty,
    tags,
    handleChangeTitle,
    handleChangeDifficulty,
    handleChangeTags,
}: Props) => (
    <BoxContainer style={{ gridRow: "span 2" }}>
        <h3>{title}</h3>
        <h3>Difficulty</h3>
        <div className="tag-container">
            <Tag selected={difficulty === "easy"}>easy</Tag>
            <Tag selected={difficulty === "medium"}>medium</Tag>
            <Tag selected={difficulty === "hard"}>hard</Tag>
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
