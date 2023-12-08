import BtnStartGame from '../BtnStartGame/BtnStartGame';
import Sandclock from '../Sandclock/Sandclock';
import UsersLis from '../UsersList/UsersList';

type Props = {
  code: string
}

const Waitingroom:React.FC<Props> = ({code}) => {
  return (
    <div className='waitingroom-component'>
        <div className="game-code">
          <p>CODE</p>
          <p className="code-id">{code}</p>
        </div>
        <div className="waiting-title">
            <p>WAITING FOR PLAYERS</p>
            <div><Sandclock/> </div>
            
        </div>
        <div className="players">
            <UsersLis />
            
        </div>
        <div className="start-button">
            <BtnStartGame />
        </div>
    </div>
  )
}

export default Waitingroom