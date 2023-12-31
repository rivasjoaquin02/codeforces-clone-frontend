import Label from "../ui/Label/Label";
import TextArea from "../ui/TextArea/TextArea";

interface Props {
    inputExample: string;
    outputExample: string;
    handleChangeInput?: (value: string) => void;
    handleChangeOutput?: (value: string) => void;
}

const BoxInputOutput = ({
    inputExample,
    outputExample,
    handleChangeInput,
    handleChangeOutput,
}: Props) => (
    <div className="box-container box border glass">
        <Label id="input-example">Input Example</Label>
        <TextArea
            id="input-example"
            value={inputExample}
            handleChange={handleChangeInput}
            readOnly={!handleChangeInput}
        />
        <Label id="output-example">Output Example</Label>
        <TextArea
            id="output-example"
            value={outputExample}
            handleChange={handleChangeOutput}
            readOnly={!handleChangeOutput}
        />
    </div>
);

export default BoxInputOutput;
