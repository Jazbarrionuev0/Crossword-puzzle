'use client'
import React, { useEffect, useState } from 'react'
import { userNames, randomUserName } from '@/utils/userNames'
import LoopIcon from '@mui/icons-material/Loop';
import Image from 'next/image';
import { createGame, joinGame } from '@/services/login';
import Waitingroom from '@/components/Waitingroom/Waitingroom';
import { seeds } from '@/utils/seeds';

const Login = () => {

  const [username, setUsername] = useState<string>('')
  const [isJoin, setIsJoin] = useState<boolean>(false)
  const [isWaiting, setIsWaiting] = useState<boolean>(false)
  const [code, setCode] = useState<string>('')

  let baseURL = `https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=`

  const [seedIndex, setSeedIndex] = useState(0);
  const [avatar, setAvatar] = useState(`${baseURL}${seeds[seedIndex]}`);

  const changeAvatar = () => {
    setSeedIndex((prevIndex) => (prevIndex + 1) % seeds.length);
    setAvatar(`${baseURL}${seeds[seedIndex]}`);
  }

  useEffect(() => {
    setUsername(randomUserName)
  }, [])

  return (
    <main className="login-page">
      <section className='title'><p>CROSSWORD</p> <p>PUZZLES</p></section>
      <section className='image'>
        <Image
          alt=''
          src={avatar}
          className='img-login'
          width={120}
          height={120}
        />
        <div className={`random-img ${isWaiting ? 'disabled' : ''}`} onClick={changeAvatar}>
          <LoopIcon className='icon' /></div>
      </section>
      <section className='name'>
        <input
          disabled={isWaiting}
          type="text"
          value={username}
          onClick={() => {
            if (userNames.includes(username)) setUsername('')
          }}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='PLAYER GAME'
        />
      </section>
      <section className='button-row'>
        <div className="button-container">
          <button
          disabled={isWaiting}
            className='game'
            onClick={async () => {
              await createGame({avatar,name:username})
              setIsWaiting(true)
            }}
          >crear sala</button>
          <button
          disabled={isWaiting}
            className='join'
            onClick={() => setIsJoin(prev => !prev)}
          >unirse a sala</button>
        </div>
      </section>
      {
        isJoin &&
        <section className='join-container'>
          <input maxLength={4} type="text" placeholder='CODE' value={code} onChange={(e) => setCode(e.target.value)}/>
          <button className='join-button' onClick={async () => {
            let error = await joinGame(code)
            if (error) {
              alert('codigo invalido')
            }
            else {
              setIsWaiting(true)
              setIsJoin(false)
            }
          }}>Join</button>
        </section>
      }
      {
        isWaiting &&
        <div className='waiting-room'>
          <Waitingroom code={code}/>
        </div>
      }
    </main>
  )
}

export default Login