import React from 'react'

const Word = ({word}:{word:string}) => {
  return (
    <div className='word-component'>
      {word}
    </div>
  )
}

export default Word