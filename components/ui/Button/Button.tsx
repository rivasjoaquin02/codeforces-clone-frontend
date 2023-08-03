"use client";

import "./Button.css";
import { ReactNode } from "react";

interface Props {
    handleClick?: () => void;
    variant?: "primary" | "secondary" | "submit" | "nav" | "dashed";
    children: ReactNode;
    disabled?: boolean;
}

const Button = ({ handleClick, variant, children, disabled }: Props) => (
    <button
        type={`${variant === "submit" ? "submit" : "button"}`}
        className={`btn ${variant ? `btn-${variant}` : ""} border`}
        // className={`${styles.btn} ${styles[`btn-${variant}`]} border`}
        onClick={handleClick && (() => handleClick())}
        disabled={disabled}
    >
        {children}
    </button>
);

export default Button;
