'use client'
import React, { useEffect, useState } from 'react'
import { userNames, randomUserName } from '@/utils/userNames'
import LoopIcon from '@mui/icons-material/Loop';

const Login = () => {

  const [username, setUsername] = useState('')
  const [isJoin, setIsJoin] = useState(false)

  useEffect(() => {
    setUsername(randomUserName)
  }, [])

  const handleCreateGame = () => {
    console.log('create game');
  }

  const handleJoineGame = () => {
    console.log('join game');
  }


  return (
    <main className="login-page">
      <section className='title'><p>CROSSWORD</p> <p>PUZZLES</p></section>
      <section className='image'>
        <img className='img-login' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png" alt="" />
        <div className='random-img'><LoopIcon className='icon'/></div>
      </section>
      <section className='name'>
        <input
          type="text"
          value={username}
          onClick={() => {
            if (userNames.includes(username)) {
              console.log('tes')
              setUsername('')
            }
          }}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          placeholder='PLAYER GAME'
        />
      </section>
      <section className='button-row'>
        <div className="button-container">
          <button
            className='game'
            onClick={handleCreateGame}
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
          <input maxLength={4} type="text" placeholder='CODE'/>
          <button className='join-button' onClick={handleJoineGame}>Join</button>
        </section>
      }

    </main>
  )
}

export default Login