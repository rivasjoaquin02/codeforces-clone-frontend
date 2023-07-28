import "./TextArea.css";

import { ChangeEvent } from "react";

interface TextAreaProps {
    id?: string;
    value: string;
    variant?: "primary" | "secondary";
    handleChange: (value: any) => void; //TODO: fix this any
    readOnly?: boolean;
}

const Input = ({
    id,
    value,
    variant = "primary",
    handleChange,
    readOnly,
}: TextAreaProps) => {
    return (
        <textarea
            id={id}
            value={value}
            className={`textarea textarea-${variant} border`}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                handleChange(e.target.value)
            }
            readOnly={readOnly}
        />
    );
};

export default Input;
