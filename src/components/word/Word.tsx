import React from 'react'

interface Props {
  word: string;
  className: string;
}

const Word: React.FC<Props> = ({ word, className }) => {
  return (
    <div className={`word-component ${className}`}>
      {word}
    </div>
  )
}

export default Word