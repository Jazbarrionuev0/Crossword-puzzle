'use client'

import React from "react";
import Image from "next/image";

interface Props {
    username: string;
    userCoord: string;
    mainUser: boolean;
    icon: string;
    style: React.CSSProperties | undefined;
}

const User = ({ username, userCoord, mainUser, style, icon }: Props) => {

    return (
        <div className="user-container" style={style}>
            <div className="icon">
                <Image
                    src={icon}
                    alt={""}
                    width={150}
                    height={150}
                />

            </div>
            <div className="user-coord">{userCoord}</div>
            <div className="username">{username}</div>
        </div>
    )
}

export default User