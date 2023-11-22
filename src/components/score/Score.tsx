import React from 'react'

type props = {
    guessed: number,
    failed: number,
    round: number
}

const Score: React.FC<props> = ({ guessed, failed, round }) => {
    return (
        <div className='score-component'>
            <header>
                <section>
                    <span>{guessed}</span>
                    <h3>Guessed</h3>
                </section>
                <section>
                    <span className='failed'>{failed}</span>
                    <h3>Failed</h3>
                </section>
            </header>
            <footer>
                <h3>Round {round}/36</h3>
            </footer>
        </div>
    )
}

export default Score