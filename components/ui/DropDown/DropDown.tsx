"use client";

import "./DropDown.css";
import { ReactNode, useState } from "react";

interface Props {
    icon: ReactNode;
    children: ReactNode;
}

const DropDown = ({ icon, children }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown">
            <div onClick={() => setOpen(!open)}>
                {icon}
            </div>
            <div className="dropdown-menu glass border">{open && children}</div>
        </div>
    );
};

export default DropDown;
