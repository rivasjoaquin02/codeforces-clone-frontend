import { ReactNode } from "react";

import "./Tag.css";

type Props =
    | { variant: "normal"; children: ReactNode }
    | { variant: "difficulty"; mode: "easy" | "medium" | "hard" | "disabled" }
    | { variant: "badge"; mode: "pro" | "noob" };

const Tag = (props: Props) => {
    switch (props.variant) {
        case "normal":
            return <div className="tag">{props.children}</div>;
        case "difficulty":
            return <div className={`tag tag--${props.mode}`}>{props.mode}</div>;
        case "badge":
            return (
                <div className={`tag tag--badge-${props.mode}`}>
                    {props.mode.toUpperCase()}
                    {props.mode === "noob" && <span>😀</span>}
                    {props.mode === "pro" && <span>😎</span>}
                </div>
            );
    }
};

export default Tag;
