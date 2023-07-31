import { CSSProperties } from "react";
import BoxContainer from "../BoxContainer";
import Label from "../ui/Label/Label";
import TextArea from "../ui/TextArea/TextArea";

interface Props {
    description: string;
    handleChange?: (value: string) => void;
    style?: CSSProperties
}

const BoxDescription = ({ description, handleChange, style }: Props) => {
    return (
        <BoxContainer style={style} >
            <Label id="description">Problem Description</Label>
            <TextArea
                id="description"
                value={description}
                handleChange={handleChange}
                readOnly={!handleChange}
                variant="primary"
            />
        </BoxContainer>
    );
};

export default BoxDescription;
