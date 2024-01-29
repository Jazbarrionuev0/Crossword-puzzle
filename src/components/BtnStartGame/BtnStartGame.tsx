import { startGame } from '@/services/login'
import { User } from '@/types/types'
import React from 'react'

type Props = {
  users: User[]
}

const BtnStartGame:React.FC<Props> = ({users}) => {
  return (
    <button onClick={async () => await startGame(users)}>START GAME</button>
  )
}

export default BtnStartGame