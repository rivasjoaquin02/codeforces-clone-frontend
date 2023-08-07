import { CSSProperties } from "react";
import Label from "../ui/Label/Label";
import TextArea from "../ui/TextArea/TextArea";

interface Props {
    description: string;
    handleChange?: (value: string) => void;
    style?: CSSProperties;
}

const BoxDescription = ({ description, handleChange, style }: Props) => (
    <div className="box-container box border glass" style={style}>
        <Label id="description">Problem Description</Label>
        <TextArea
            id="description"
            value={description}
            handleChange={handleChange}
            readOnly={!handleChange}
            variant="primary"
        />
    </div>
);

export default BoxDescription;
