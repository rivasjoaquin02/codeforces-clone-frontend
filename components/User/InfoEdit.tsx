"use client";

import { useState } from "react";
import "./User.css";

import { MapPin, Edit2 } from "lucide-react";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import AvatarAdd from "../ui/Avatar/AvatarAdd";

const InfoEdit = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [birthday, setBirthday] = useState<string>();

    // console.log(birthday);

    return (
        <div className="profileinfo-container glass border">
            <AvatarAdd width={200} height={200} />

            <div className="profileinfo">
                <Input
                    value={username}
                    handleChange={setUsername}
                    placeholder="username"
                />
                <Input
                    value={email}
                    handleChange={setEmail}
                    type="email"
                    placeholder="user@email.com"
                />

                <div style={{ display: "flex", gap: "10px" }}>
                    <Button>
                        <MapPin size={20} />
                        Havana
                    </Button>
                    <Input
                        type="date"
                        value={birthday}
                        handleChange={setBirthday}
                    />
                </div>

                <Button>
                    <Edit2 size={20} />
                    Save
                </Button>
            </div>
        </div>
    );
};

export default InfoEdit;
