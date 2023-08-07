import Link from "next/link";
import "./Button.css";
import { ReactNode } from "react";

interface Props {
    redirectUrl: string;
    handleClick?: () => void;
    type?: "button" | "submit";
    variant?: "primary" | "secondary" | "submit" | "nav" | "dashed";
    children: ReactNode;
}

const ButtonRedirect = ({
    redirectUrl,
    handleClick,
    variant,
    children,
    type = "button",
}: Props) => (
    <Link
        href={redirectUrl}
        type={type}
        className={`btn ${variant ? `btn--${variant}` : ""} border`}
        onClick={handleClick}
    >
        {children}
    </Link>
);

export default ButtonRedirect;
