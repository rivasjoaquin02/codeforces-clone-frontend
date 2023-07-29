"use client";

import "./Avatar.css";

import Image from "next/image";

interface Props {
    alt?: string;
    userId?: string;
    width?: number;
    height?: number;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

const Avatar = ({ alt, userId, width = 34, height = 34 }: Props) => {
    const imageLoader = ({ src: userId }: { src: string }) => {
        return `${API_URL}/users/${userId}/image`;
    };
    return (
        <div className="avatar" style={{ height, width }}>
            <Image
                // loader={imageLoader}
                alt={alt ? alt : "Avatar"}
                src={userId ? userId : "/images/default-avatar.jpg"}
                width={width}
                height={height}
                // placeholder="blur"
            />
        </div>
    );
};

export default Avatar;
