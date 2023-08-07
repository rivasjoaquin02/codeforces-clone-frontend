"use client";

import "./DropDown.css";
import { ReactNode, useState } from "react";

interface Props {
    icon: ReactNode;
    children: ReactNode;
}

export const DropDown = ({ icon, children }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown">
            <div onClick={() => setOpen(!open)}>{icon}</div>
            <div className="dropdown__menu glass border">
                {open && children}
            </div>
        </div>
    );
};

export const DropDownItem = ({ children }: { children: ReactNode }) => {
    return <div className="dropdown__item">{children}</div>;
};
