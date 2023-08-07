"use client";

import "./UserInfo.css";

import { StyleHTMLAttributes, useState } from "react";
import Info from "./Info";
import InfoEdit from "./InfoEdit";

interface Props {
    style: StyleHTMLAttributes<HTMLDivElement>["style"];
}

const UserInfo = ({ style }: Props) => {
    const [edit] = useState(false);

    // delete this
    // setEdit(false);

    return <div style={style}>{!edit ? <Info /> : <InfoEdit />}</div>;
};

export default UserInfo;
