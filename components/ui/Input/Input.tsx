import "./Input.css";

import { ChangeEvent, HTMLInputTypeAttribute } from "react";

interface InputProps {
    id?: string;
    type?: HTMLInputTypeAttribute;
    value?: string | Array<string>;
    variant?: "primary" | "secondary";
    handleChange?: (value: string) => void; //TODO: fix this any
    required?: boolean;
    readOnly?: boolean;
    datalist?: Array<string>;
    placeholder?: string;
}

const Input = ({
    id,
    type = "text",
    value,
    variant = "primary",
    handleChange,
    required = false,
    readOnly,
    datalist,
    placeholder,
}: InputProps) => (
    <>
        <input
            id={id}
            type={type}
            value={value}
            className={`input ${
                variant ? `input-${variant}` : ""
            } input-${variant} border`}
            onChange={
                handleChange &&
                ((e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(e.target.value))
            }
            required={required}
            list="datalist"
            readOnly={readOnly}
            placeholder={placeholder}
        />
        {datalist && (
            <datalist id="datalist">
                {datalist.map((entry) => (
                    <option key={entry} value={entry} />
                ))}
            </datalist>
        )}
    </>
);

export default Input;
