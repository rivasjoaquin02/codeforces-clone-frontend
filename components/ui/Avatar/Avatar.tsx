import "./Avatar.css";

import Image from "next/image";

interface Props {
    alt?: string;
    userId?: string;
    width?: number;
    height?: number;
    handleClick?: () => void;
    skeleton?: boolean;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
const imageLoader = ({ src: userId }: { src: string }) => {
    return `${API_URL}/users/${userId}/image`;
};

const Avatar = ({
    alt,
    userId,
    width = 34,
    height = 34,
    handleClick,
    skeleton,
}: Props) =>
    skeleton ? (
        <div className="avatar skeleton" style={{ height, width }}></div>
    ) : (
        <div className="avatar" style={{ height, width }} onClick={handleClick}>
            <Image
                // loader={imageLoader}
                alt={alt ?? "Avatar"}
                src={userId ?? "/images/default-avatar.jpg"}
                width={width}
                height={height}
                // placeholder="blur"
            />
        </div>
    );

export default Avatar;
