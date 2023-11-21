'use client'
import CellContainer from "@/components/cells-container/CellsContainer";
import Word from "@/components/word/Word";
import WordsContainer from "@/components/words-container/WordsContainer";

const Home = () => {

  let words: string[] = ['arbol', 'hotel', 'pileta', 'casa', 'caca', 'jaz']




  return (
    <main className="root-page">
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
    </main>
  )
}

export default Home
