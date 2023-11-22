'use client'
import CellContainer from "@/components/cells-container/CellsContainer";
import User from "@/components/user/User";
import UserContainer from "@/components/users-container/UserContainer";
import Word from "@/components/word/Word";
import WordsContainer from "@/components/words-container/WordsContainer";

const Home = () => {

  let words: string[] = ['arbol', 'hotel', 'pileta', 'casa', 'caca', 'jaz']




  return (
    <main className="root-page">
      <div className="main-left">
        <button className="clue-btn">clue</button>
      </div>
      <div className="center">
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
        result
      </div>
      
      <UserContainer users={[{coord: 'A2', username: 'VALEN'},{coord: 'F5', username: 'MATU'},{coord: 'E4', username: 'JAZ'},{coord: 'A5', username: 'LUCA'}, ]}  />
    </main>
  )
}

export default Home
