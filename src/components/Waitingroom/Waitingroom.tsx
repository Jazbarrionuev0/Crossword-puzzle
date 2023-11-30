"use client"

import React from 'react'
import { getRandomCode } from "@/utils/functions";
import Sandclock from '../Sandclock/Sandclock';

const Waitingroom = () => {
  return (
    <div className='waitingroom-component'>
        <div className="game-code">
          <p>CODE</p>
          <p className="code-id">{'hby'}</p>
        </div>
        <div className="waiting-title">
            <p>WAITING FOR PLAYERS</p>
            <div><Sandclock/> </div>
            
        </div>
        <div className="players">
            <div>PLAYER1</div>
            <div>PLAYER2</div> 
            <div>PLAYER2</div> 
            <div>PLAYER2</div> 
            
        </div>
        <div className="start-button">
            <button>START GAME</button>
        </div>
    </div>
  )
}

export default Waitingroom