'use client'

import { handleClue } from "@/services/game"

const BtnClue = () => {
    return (
        <button className="clue-btn" onClick={handleClue}>CLUE</button>
    )
}

export default BtnClue