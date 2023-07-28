"use client";

import { CSSProperties, useState } from "react";
import BoxContainer from "../BoxContainer";
import Label from "../ui/Label/Label";
import TextArea from "../ui/TextArea/TextArea";
import Select from "../ui/Select/Select";

interface Props {
    value: string;
    handleChange?: (value: string) => void;
    style?: CSSProperties;
}

const LANGUAGES = [
    { value: "cpp", label: "C++" },
    { value: "java", label: "Java" },
    { value: "python", label: "Python" },
    { value: "javascript", label: "JavaScript" },
    { value: "typescript", label: "TypeScript" },
    { value: "c", label: "C" },
    { value: "csharp", label: "C#" },
    { value: "go", label: "Go" },
];

const BoxCode = ({ value, handleChange, style }: Props) => {
    const [lang, setLang] = useState<string>("");

    return (
        <BoxContainer style={style}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Label id="input-example">Solution</Label>

                <Select
                    value={lang}
                    handleChange={setLang}
                    options={LANGUAGES}
                />
            </div>
            <TextArea
                id="description"
                value={value}
                handleChange={handleChange}
                readOnly={!handleChange}
            />
        </BoxContainer>
    );
};

export default BoxCode;
