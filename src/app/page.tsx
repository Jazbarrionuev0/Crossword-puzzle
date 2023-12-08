import BtnClue from "@/components/BtnClue/BtnClue";
import CellContainer from "@/components/cells-container/CellsContainer";
import Score from "@/components/score/Score";
import UserContainer from "@/components/users-container/UserContainer";
import WordsContainer from "@/components/words-container/WordsContainer";
import WordRepository from "@/repositories/WordRepository";
import { Score as ScoreType, UserInfo, Word, WordsAxis } from "@/types/types";

import dynamic from "next/dynamic";

const Home = async () => {
  let wordsRepository = new WordRepository();
  let { wordsX, wordsY }: WordsAxis = await wordsRepository.GetSixWords();
  let users: UserInfo[] = [{ coord: 'A2', username: 'VALEN' }, { coord: 'F5', username: 'MATU' }, { coord: 'E4', username: 'JAZ' }, { coord: 'A5', username: 'LUCA' },]
  let score: ScoreType = { guessed: 12, failed: 3, round: 16 }
  return (
    <main className="root-page">
      <div className="main-left">
        <BtnClue />
      </div>
      <div className="center">
        <section className="tablero">
          <div className="up">
            <WordsContainer orientation={true} words={wordsY} />
          </div>
          <div className="down">
            <div className="left">
              <WordsContainer orientation={false} words={wordsX} />
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

export default dynamic(() => Promise.resolve(Home), { ssr: false })
