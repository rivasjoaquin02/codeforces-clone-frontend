import "./TextArea.css";

interface TextAreaProps {
    id?: string;
    value: string;
    variant?: "primary" | "secondary";
    handleChange?: (value: string) => void; //TODO: fix this any
    readOnly?: boolean;
}

const Input = ({
    id,
    value,
    variant,
    handleChange,
    readOnly = false,
}: TextAreaProps) => {
    return (
        <textarea
            id={id}
            value={value}
            className={`textarea ${variant ? `textarea-${variant}` : ""}`}
            onChange={
                handleChange ? (e) => handleChange(e.target.value) : undefined
            }
            readOnly={readOnly}
        />
    );
};

export default Input;
