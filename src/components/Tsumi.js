import '../styles/Characters.scss'
import Tsumi3 from '../resources/images/TsumiMain/Tsumi3.png'
import TsumiO from '../resources/images/TsumiMain/TsumiO.png'


export default function Tsumi(props) {
  return(
    <div className={props.className}>
      {props.time % 2 === 0 ? <img src={Tsumi3} alt="Tsumi Closed Mouth" /> : <img src={TsumiO} alt="Tsumi Open Mouth" /> }
    </div>
  )
}