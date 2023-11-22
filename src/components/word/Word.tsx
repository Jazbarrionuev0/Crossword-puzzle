import React from 'react'

const Word = ({word, className}:{word:string,className:string}) => {
  return (
    <div className={`word-component ${className}`}>
      {word}
    </div>
  )
}

export default Word