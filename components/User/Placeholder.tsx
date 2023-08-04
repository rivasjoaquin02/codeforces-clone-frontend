import { StyleHTMLAttributes } from "react";
import "./User";

const Placeholder = ({
    style,
}: {
    style: StyleHTMLAttributes<HTMLDivElement>["style"];
}) => {
    return (
        <div className="profile-placeholder glass border" style={style}>
            Placeholder
        </div>
    );
};

export default Placeholder;
