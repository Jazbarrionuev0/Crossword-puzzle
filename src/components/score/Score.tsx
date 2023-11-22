import { Score } from '@/types/types';
import React from 'react'

const Score: React.FC<Score> = ({ guessed, failed, round }) => {
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