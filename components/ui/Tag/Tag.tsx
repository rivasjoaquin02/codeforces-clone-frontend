import { ReactNode } from "react";

import "./Tag.css";

type Props = {
    difficulty?: "easy" | "medium" | "hard";
    children?: ReactNode;
    skeleton?: boolean;
};

const Tag = ({ difficulty, skeleton, children }: Props) =>
    skeleton ? (
        <div className="tag tag-skeleton skeleton"></div>
    ) : (
        <div className={`tag ${difficulty ? `tag-${difficulty}` : ""}`}>
            {children}
        </div>
    );

export default Tag;
