'use client'

import React from "react";
import Image from "next/image";
type props = {
    username: string,
    userCoord: string,
    mainUser: boolean,
    icon: string,
    style: React.CSSProperties | undefined
}

const User = ({username,userCoord,mainUser,style, icon}:props) => {
    
    return (
        <div className="user-container" style={style}>
            <div className="icon">
                <Image 
                    // src={"https://cdn-icons-png.flaticon.com/512/1674/1674229.png"} 
                    src={icon} 
                    alt={""} 
                    width={80}
                    height={80}
                />

            </div>
            <div className="user-coord">{userCoord}</div>
            <div className="username">{username}</div>
        </div>
    )
}

export default User