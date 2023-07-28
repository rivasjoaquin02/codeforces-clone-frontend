import Link from "next/link";
import "./Button.css";
import { ReactNode } from "react";

interface Props {
    redirectUrl: string;
    handleClick?: () => void;
    variant?: "primary" | "secondary" | "submit" | "nav";
    children: ReactNode;
}

const Button = ({ redirectUrl, handleClick, variant, children }: Props) => (
    <Link
        href={redirectUrl}
        type={`${variant === "submit" ? "submit" : "button"}`}
        className={`btn btn-${variant} border`}
        // className={`${styles.btn} ${styles[`btn-${variant}`]} border`}
        onClick={handleClick}
    >
        {children}
    </Link>
);

export default Button;
