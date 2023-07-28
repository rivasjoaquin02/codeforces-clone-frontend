import "./Input.css";

import { ChangeEvent } from "react";

interface InputProps {
    id?: string;
    type?: "text" | "number" | "password" | "email";
    value: string | Array<string>;
    variant?: "primary" | "secondary";
    handleChange: (value: string) => void; //TODO: fix this any
    required?: boolean;
}

const Input = ({
    id,
    type = "text",
    value,
    variant = "primary",
    handleChange,
    required = false,
}: InputProps) => (
    <input
        id={id}
        type={type}
        value={value}
        className={`input ${
            variant ? `input-${variant}` : ""
        } input-${variant} border`}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange(e.target.value)
        }
        required={required}
    />
);

export default Input;
