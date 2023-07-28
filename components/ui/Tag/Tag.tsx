import { ReactNode } from "react";

import "./Tag.css";

interface TagProps {
    selected?: boolean;
    children: ReactNode;
}

const Tag = ({ selected, children }: TagProps) => (
    <div className={`tag tag-${selected && "selected"}`}>{children}</div>
);

export default Tag;
