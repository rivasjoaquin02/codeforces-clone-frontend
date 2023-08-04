"use client";

import { StyleHTMLAttributes, useState } from "react";
import Info from "../Info";
import InfoEdit from "../InfoEdit";

interface Props {
    style: StyleHTMLAttributes<HTMLDivElement>["style"];
}

const UserInfo = ({ style }: Props) => {
    const [edit, setEdit] = useState(false);

    return <div style={style}>{!edit ? <Info /> : <InfoEdit />}</div>;
};

export default UserInfo;
