"use client";

import { useState } from "react";
import Avatar from "../Avatar/Avatar";

import { MapPin, Edit2 } from "lucide-react";
import Button from "../Button/Button";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Input from "../Input/Input";
import Tag from "../Tag/Tag";

const Info = () => {
    const [birthday, setBirthday] = useState<string>();

    const badge = "pro";

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/api/auth/signin?callbackUrl=/client");
        },
    });

    return (
        <div className="profileinfo-container glass border">
            <Avatar width={200} height={200} emoji="😉" />

            <div className="profileinfo">
                <div>
                    <div>
                        <Tag variant="badge" mode={badge}></Tag>
                        <h1>{session?.user?.name}</h1>
                    </div>
                    <h3 className="profileinfo__email">
                        {session?.user?.email}
                    </h3>
                </div>

                <div className="profileinfo__birthday">
                    <Input
                        type="date"
                        value={birthday}
                        handleChange={setBirthday}
                        readOnly
                    />
                </div>

                <div className="profileinfo__location">
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
