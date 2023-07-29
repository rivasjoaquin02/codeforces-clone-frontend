import "./Button.css";
import { ReactNode } from "react";

interface Props {
    handleClick?: () => void;
    variant?: "primary" | "secondary" | "submit" | "nav";
    children: ReactNode;
}

const Button = ({ handleClick, variant, children }: Props) => (
    <button
        type={`${variant === "submit" ? "submit" : "button"}`}
        className={`btn ${variant ? `btn-${variant}` : ""} border`}
        // className={`${styles.btn} ${styles[`btn-${variant}`]} border`}
        onClick={handleClick}
    >
        {children}
    </button>
);

export default Button;
