import "./Avatar.css";

import { ImagePlus } from "lucide-react";

interface Props {
    alt?: string;
    userId?: string;
    width?: number;
    height?: number;
    handleClick?: () => void;
}

const AvatarAdd = ({ width = 34, height = 34, handleClick }: Props) => (
    <div className="avatar-add" style={{ height, width }} onClick={handleClick}>
        <ImagePlus />
    </div>
);

export default AvatarAdd;
