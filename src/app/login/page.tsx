'use client'
import React, { useEffect, useState } from 'react'

let usersNames = ['MegaDoge', ]

const Login = () => {

  const [username, setUsername] = useState('')

  useEffect(() => {
    setUsername(usersNames[0])
  }, [])
  

  return (
    <main className="login-page">
        <section className='title'><p>CROSSWORD</p> <p>PUZZLES</p></section>
        <section className='image'><img className='img-login' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png" alt="" /></section>
        <section className='name'>
          <input 
            type="text" 
            value={username}
            onClick={() => {
              if (username == usersNames[0]) {
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
        <section className='button-container'><button className='game'>crear sala</button>
        <button className='join'>unirse a sala</button></section>
    </main>
  )
}

export default Login