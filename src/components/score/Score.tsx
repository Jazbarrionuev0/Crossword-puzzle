import React from 'react'

const Score = () => {
  return (
    <div className='score-component'>
        <header>
            <section>
                <span>{Math.round(Math.random() * 16)}</span>
                <h3>Guessed</h3>
            </section>
            <section>
                <span className='failed'>{Math.round(Math.random() * 16)}</span>
                <h3>Failed</h3>
            </section>
        </header>
        <footer>
            <h3>Round x/36</h3>
        </footer>
    </div>
  )
}

export default Score