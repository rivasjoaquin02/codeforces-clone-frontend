import { ReactNode } from "react";

import "./Label.css";

const Label = ({ id, children }: { id: string; children: ReactNode }) => {
    return <label htmlFor={id}>{children}</label>;
};

export default Label;
