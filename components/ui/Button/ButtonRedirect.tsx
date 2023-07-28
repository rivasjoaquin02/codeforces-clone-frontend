import Link from "next/link";
import "./Button.css";
import { ReactNode } from "react";

interface Props {
    redirectUrl: string;
    handleClick?: () => void;
    variant?: "primary" | "secondary" | "submit" | "nav";
    children: ReactNode;
}

const ButtonRedirect = ({ redirectUrl, handleClick, variant, children }: Props) => (
    <Link
        href={redirectUrl}
        type={`${variant === "submit" ? "submit" : "button"}`}
        className={`btn ${variant ? `btn-${variant}` : ""} border`}
        onClick={handleClick}
    >
        {children}
    </Link>
);

export default ButtonRedirect;
