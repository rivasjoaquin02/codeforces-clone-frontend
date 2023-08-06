import "./Avatar.css";

import Image from "next/image";

interface Props {
    alt?: string;
    userId?: string;
    width?: number;
    height?: number;
    handleClick?: () => void;
    skeleton?: boolean;
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
    skeleton,
    emoji,
}: Props) =>
    skeleton ? (
        <div className="avatar skeleton" style={{ height, width }}></div>
    ) : (
        <div className="avatar" style={{ height, width }} onClick={handleClick}>
            <div className="avatar-image-emoji">
                <Image
                    // loader={imageLoader}
                    alt={alt ?? "Avatar"}
                    src={userId ?? "/images/default-avatar.jpg"}
                    width={width}
                    height={height}
                    // placeholder="blur"
                />
                <div className="emoji">{emoji}</div>
            </div>
        </div>
    );

export default Avatar;
