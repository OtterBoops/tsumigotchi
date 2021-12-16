import WinCard from "./WinComponents/WinCard"
import '../styles/GameOver.scss'

export default function GameOver (props) {
  return(
    <WinCard header="G E T B U L L I E D" className={`WinCard GameOver`}>
      YOU SMELL REALLY BAD<br /><br />
      YOUR ELBOW SKIN IS SOGGY<br /><br />
      TSUGMA
    </WinCard>
  )
}