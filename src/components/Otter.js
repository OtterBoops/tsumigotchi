import { random100 } from '../logic/Helpers'
import '../styles/Characters.scss'
import OtterO from '../resources/images/OtterMain/OtterDegenO.png'
import OtterC from '../resources/images/OtterMain/OtterDegenC.png'

export default function Otter(props) {
  return(
    <div className={props.className} style={{
        top: random100(),
        left: random100()
      }}>
        {props.time % 2 === 0 ? <img src={OtterC} alt="Otter Closed Mouth" /> : <img src={OtterO} alt="Otter Open Mouth" /> }
    </div>
  )
}