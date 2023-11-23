'use client'
import CellContainer from "@/components/cells-container/CellsContainer";
import Score from "@/components/score/Score";
import UserContainer from "@/components/users-container/UserContainer";
import WordsContainer from "@/components/words-container/WordsContainer";
import { Score as ScoreType, UserInfo } from "@/types/types";

const Home = () => {
  let words: string[] = ['arbol', 'hotel', 'pileta', 'casa', 'caca', 'jaz']
  let users: UserInfo[] = [{ coord: 'A2', username: 'VALEN' }, { coord: 'F5', username: 'MATU' }, { coord: 'E4', username: 'JAZ' }, { coord: 'A5', username: 'LUCA' },]
  let score: ScoreType = { guessed: 12, failed: 3, round: 16 }

  return (
    <main className="root-page">
      <div className="main-left">
        <button className="clue-btn" onClick={() => alert('clue')}>CLUE</button>
      </div>
      <div className="center">
        <div className="room-game">
          <p>ROOM</p>
          <p className="room-id">LJ12</p>
        </div>
        <section className="tablero">
          <div className="up">
            <WordsContainer orientation={true} words={words} />
          </div>
          <div className="down">
            <div className="left">
              <WordsContainer orientation={false} words={words} />
            </div>
            <div className="right">
              <CellContainer />
            </div>
          </div>
        </section>
      </div>
      <div className="main-right">
        <Score guessed={score.guessed} failed={score.failed} round={score.round} />
      </div>
      <UserContainer users={users} />
    </main>
  )
}

export default Home
