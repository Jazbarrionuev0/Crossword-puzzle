import React from 'react'
import User from '../user/User'

type userInfo = {
    username: string,
    coord: string
}

type props = {
    users: userInfo[]
}

const UserContainer = ({ users }: props) => {
    
    let style = {
        backgroundColor: 'red'
    }

    let output = users.map((user: userInfo, i: number) => {
        return (
            <User
                key={i}
                mainUser
                userCoord={user.coord}
                username={user.username}
                style={i == 0 ? {top:0,left:0, borderRadius: '0 0 20px 0'} : 
                i == 1 ? {top:0,right:0, borderRadius: '0 0 0 20px'} : 
                i == 2 ? {bottom:0,left:0, borderRadius: '0 20px 0 0'} : 
                {bottom: 0, right: 0, borderRadius: '20px 0 0 0'}}
                icon={`https://cdn-icons-png.flaticon.com/512/1674/1674229.png`}
            />
        )
    })

    return (
        <div>
            {output}
        </div>

    )
}

export default UserContainer