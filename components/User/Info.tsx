"use client";

import { useState } from "react";
import Avatar from "../ui/Avatar/Avatar";
import "./User.css";

import { MapPin, Edit2 } from "lucide-react";
import Button from "../ui/Button/Button";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Input from "../ui/Input/Input";
import Tag from "../ui/Tag/Tag";

const Info = () => {
    const [birthday, setBirthday] = useState<string>();

    const badge = "pro";

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/api/auth/signin?callbackUrl=/client");
        },
    });

    // console.log(birthday);

    return (
        <div className="profileinfo-container glass border">
            <Avatar width={200} height={200} emoji="😉" />

            <div className="profileinfo">
                <div>
                    <div>
                        {badge ? (
                            <Tag variant="badge" mode={badge}></Tag>
                        ) : (
                            <Tag variant="normal">empty</Tag>
                        )}
                        <h1 className="info-username">{session?.user?.name}</h1>
                    </div>
                    <h3 className="info-email">{session?.user?.email}</h3>
                </div>

                <div className="info-birthday">
                    <Input
                        type="date"
                        value={birthday}
                        handleChange={setBirthday}
                        readOnly
                    />
                </div>

                <div className="info-location">
                    <Button>
                        <MapPin size={20} />
                        Havana
                    </Button>
                </div>
            </div>

            <Button>
                <Edit2 size={20} />
                Edit Profile
            </Button>
        </div>
    );
};

export default Info;
