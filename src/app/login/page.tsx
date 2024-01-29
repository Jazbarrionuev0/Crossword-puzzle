'use client'
import Image from 'next/image';
import LoopIcon from '@mui/icons-material/Loop';
import Waitingroom from '@/components/Waitingroom/Waitingroom';
import { seeds } from '@/utils/seeds';
import { createGame, joinGame } from '@/services/login';
import { userNames, randomUserName } from '@/utils/userNames'
import { Suspense, useEffect, useState } from 'react'
import Sandclock from '@/components/Sandclock/Sandclock';
import BtnStartGame from '@/components/BtnStartGame/BtnStartGame';

const Login = () => {
  const [username, setUsername] = useState<string>('')
  const [isJoin, setIsJoin] = useState<boolean>(false)
  const [isWaiting, setIsWaiting] = useState<boolean>(false)
  const [code, setCode] = useState<string>('')

  let baseURL = `https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=`

  const [seedIndex, setSeedIndex] = useState(1);
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
              let code = await createGame({avatar,name:username})
              setCode(code)
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
          <input maxLength={4} type="text" placeholder='CODE' value={code} onChange={(e) => setCode(e.target.value)} />
          <button className='join-button' onClick={async () => {
            let error = await joinGame(code,{avatar,name:username})
            if (error) {
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
          <Suspense fallback={
            <div className='waitingroom-component'>
            <div className="game-code">
              <p>CODE</p>
              <p className="code-id">{code}</p>
            </div>
            <div className="waiting-title">
              <p>WAITING FOR PLAYERS</p>
              <div><Sandclock /> </div>
            </div>
            <div className="players">
            </div>
            <div className="start-button">
              <BtnStartGame />
            </div>
          </div>
          }>
            <Waitingroom code={code.toUpperCase()}/>
          </Suspense>
        </div>
      }
    </main>
  )
}

export default Login