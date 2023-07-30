import { ReactNode } from "react";

import "./Tag.css";

type Props = {
    children: ReactNode;
    difficulty?: "easy" | "medium" | "hard";
};

const Tag = ({ difficulty, children }: Props) => (
    <div className={`tag ${difficulty ? `tag-${difficulty}` : ""}`}>
        {children}
    </div>
);
export default Tag;
