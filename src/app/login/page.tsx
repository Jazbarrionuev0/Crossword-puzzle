'use client'
import React, { useEffect, useState } from 'react'
import { userNames, randomUserName } from '@/utils/userNames'
import LoopIcon from '@mui/icons-material/Loop';
import Image from 'next/image';
import { handleCreateGame, handleJoineGame } from '@/services/login';
import Waitingroom from '@/components/Waitingroom/Waitingroom';

const Login = () => {

  const [username, setUsername] = useState<string>('')
  const [isJoin, setIsJoin] = useState<boolean>(false)
  const [isWaiting, setIsWaiting] = useState<boolean>(false)

  let baseURL = `https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=`

  let seeds = [
    'Miss%20kitty',
    'Sasha',
    'Mimi',
    'Bella',
    'Peanut',
    'Mittens',
    'Spooky',
    'Charlie'
  ];

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
        <div className='random-img' onClick={changeAvatar}>
          <LoopIcon className='icon' /></div>
      </section>
      <section className='name'>
        <input
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
            className='game'
            onClick={async () => {
              await handleCreateGame(username)
              setIsWaiting(true)
            }}
          >crear sala</button>
          <button
            className='join'
            onClick={() => setIsJoin(prev => !prev)}
          >unirse a sala</button>
        </div>
      </section>
      {
        isJoin &&
        <section className='join-container'>
          <input maxLength={4} type="text" placeholder='CODE' />
          <button className='join-button' onClick={() => {
            handleJoineGame()
            setIsWaiting(true)
          }}>Join</button>
        </section>
      }
      {
        isWaiting &&
        <div className='waiting-room'>
          <Waitingroom />
        </div>
      }
    </main>
  )
}

export default Login