'use client'

import { User } from '@/types/types';
import BtnStartGame from '../BtnStartGame/BtnStartGame';
import Sandclock from '../Sandclock/Sandclock';
import UsersLis from '../UsersList/UsersList';
import UserGameRepository from '@/repositories/UserGameRepository';
import supabase from '@/utils/supabase';
import { RealtimePostgresInsertPayload } from '@supabase/supabase-js';
import UserRepository from '@/repositories/UserRepository';
import { useEffect, useState } from 'react';

type Props = {
  code: string
}

let userGameRepository = new UserGameRepository()
let userRepository = new UserRepository()

const Waitingroom: React.FC<Props> = ({ code }) => {

  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchData = async () => {
      let users: User[] = await userGameRepository.GetUsersByCode(code)
      setUsers(users)
    }
    fetchData()
  }, [code])

  const handleInserts = async (payload: RealtimePostgresInsertPayload<{ [key: string]: any; }>) => {
    let user: User | null = await userRepository.GetById(payload.new.user_id)
    setUsers(prev => [...prev, user!])
  }

  supabase
    .channel('users_games')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'users_games' }, handleInserts)
    .subscribe()

  return (
    <div className='waitingroom-component'>
      <div className="game-code">
        <p>CODE</p>
        <p className="code-id">{code}</p>
      </div>
      <div className="waiting-title">
        {
          users.length < 4
            ?
            <p>WAITING FOR PLAYERS</p>
            :
            <p>ALL PLAYERS READY</p>
        }

      </div>
      <div className="players">
        <UsersLis users={users} />
      </div>
      {users.length < 4 && <Sandclock />}
      <div className="start-button">
        <BtnStartGame users={users}/>
      </div>
    </div>
  )
}

export default Waitingroom