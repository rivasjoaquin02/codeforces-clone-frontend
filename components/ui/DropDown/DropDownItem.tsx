import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const DropDownItem = ({ children }: Props) => {
    return <div className="dropdown-item">{children}</div>;
};

export default DropDownItem;
