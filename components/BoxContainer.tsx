import { CSSProperties, ReactNode } from "react";

interface Props {
    children: ReactNode;
    style?: CSSProperties;
}

const BoxContainer = ({ children, style }: Props) => {
    return (
        <div className="box-container box border" style={style}>
            {children}
        </div>
    );
};

export default BoxContainer;
