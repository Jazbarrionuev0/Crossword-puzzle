import React from 'react'
import Word from '../word/Word'

type props = {
    orientation: boolean,
    words: string[]
}
const WordsContainer = ({ orientation, words }: props) => {

    let output = words.map((word: string, i: number) => {
        let letters = ['A', 'B', 'C', 'D', 'E', 'F']
        return (
            <div className='cell-container' key={i}>
                <div className='cell'>{orientation ? letters[i] : (i+1).toString()}</div>
                <Word word={word} />
            </div>
        )
    })

    return (
        <div className={`words-container-component ${orientation ? '' : 'vertical'}`}>
            {output}
        </div>
    )
}

export default WordsContainer