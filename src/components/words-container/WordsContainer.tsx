import React from 'react'
import Word from '../word/Word'

interface Props {
    orientation: boolean,
    words: string[]
}

const WordsContainer: React.FC<Props> = ({ orientation, words }) => {

    let output = words.map((word: string, i: number) => {
        let letters = ['A', 'B', 'C', 'D', 'E', 'F']
        return (
            <>
                <div className='cell'>{orientation ? letters[i] : (i + 1).toString()}</div>
                {
                    !orientation &&<Word word={word} className={`word${i}`} /> 
                }
            </>
        )
    })

    return (
        <div className={`words-container-component ${orientation ? '' : 'vertical'}`}>
            {output}
            {orientation &&
            words.map((word: string, i: number) => <Word word={word} className={`word${i}`} /> )
            
            }
        </div>
    )
}

export default WordsContainer