"use client";

import { CSSProperties, useState } from "react";
import BoxContainer from "../BoxContainer";
import Label from "../ui/Label/Label";
import Select from "../ui/Select/Select";

interface Props {
    value: string;
    handleChange: (value: string) => void;
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

const BoxCode = ({ value, handleChange }: Props) => {
    const [lang, setLang] = useState<string>("");

    return (
        <BoxContainer style={{ flexGrow: 2 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Label id="input-example">Solution</Label>
                <Select
                    value={lang}
                    handleChange={setLang}
                    options={LANGUAGES}
                />
            </div>
            <div style={{flexGrow: 2}}>
                <textarea
                    value={value}
                    className="textarea textarea-code"
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
        </BoxContainer>
    );
};

export default BoxCode;
