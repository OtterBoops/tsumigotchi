import { random100, randomBg } from '../logic/Helpers'

import '../styles/Characters.scss'


function Otter() {
    return(
      <div className="Otter" style={{
          backgroundColor: randomBg(),
          top: random100(),
          left: random100()
        }}>
          Otter
      </div>
    )
  }

export default Otter