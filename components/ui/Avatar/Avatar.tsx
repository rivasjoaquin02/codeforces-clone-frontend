import "./Avatar.css";

import Image from "next/image";

interface Props {
    alt?: string;
    userId?: string;
    width?: number;
    height?: number;
    handleClick?: () => void;
    emoji?: string;
}

// const imageLoader = ({ src: userId }: { src: string }) => {
//     return `${API_URL}/users/${userId}/image`;
// };

const Avatar = ({
    alt,
    userId,
    width = 34,
    height = 34,
    handleClick,
    emoji,
}: Props) => (
    <div className="avatar" style={{ height, width }} onClick={handleClick}>
        <Image
            alt={alt ?? "Avatar"}
            src={userId ?? "/images/default-avatar.jpg"}
            width={width}
            height={height}
            // loader={imageLoader}
            // placeholder="blur"
        />
        <div className="avatar--emoji">{emoji}</div>
    </div>
);

export default Avatar;
