import { User } from '@/types/types'
import Image from 'next/image'
import React from 'react'

type Props = {
  users: User[]
}

const UsersList: React.FC<Props> = ({ users }) => {
  let usersElement = users.map((user: User, i: number) => {
    return (
      <div key={i} className='user-row' style={userRow}>
        <Image src={user.avatar} alt="" width={50} height={50} style={image}/>
        <span>{user.name}</span>
      </div>
    )
  })
  return usersElement
}

let userRow: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center'
}

let image: React.CSSProperties = {
  borderRadius: '50%',
  outline: '2px solid #FFF',
  display: 'flex',
  alignItems: 'center',
  marginRight: '10px'
}

export default UsersList