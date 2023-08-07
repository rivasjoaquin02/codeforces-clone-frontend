import "./Avatar.css";

interface Props {
    width?: number;
    height?: number;
}

const AvatarSkeleton = ({ width = 34, height = 34 }: Props) => (
    <div className="avatar skeleton" style={{ height, width }}></div>
);

export default AvatarSkeleton;
