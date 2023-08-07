"use client";

import "./Button.css";
import { ReactNode } from "react";

interface Props {
    handleClick?: () => void;
    variant?: "primary" | "secondary" | "submit" | "nav" | "dashed";
    type?: "button" | "submit";
    children: ReactNode;
    disabled?: boolean;
}

const Button = ({
    handleClick,
    variant,
    children,
    disabled,
    type = "button",
}: Props) => (
    <button
        className={`btn ${variant ? `btn--${variant}` : ""} border`}
        type={type}
        onClick={handleClick && (() => handleClick())}
        disabled={disabled}
    >
        {children}
    </button>
);

export default Button;
