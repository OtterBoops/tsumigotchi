import { Component } from 'react'
import WinCard from './WinComponents/WinCard'
import WinButton from './WinComponents/WinButton'
import '../styles/Main.scss'
import '../styles/Stats.scss'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      health: 5,
      fun: 100,
      energy: 100,
      battery: 100,
      otts: 3,
    }
  }

  componentDidUpdate = (prevProps) => {
    if(JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
      if(this.props.running === true && this.state.health > 0)
      {
        this.setState({
          health: this.logic.damage(this.state.health)
        })
      } else {
        this.logic.stop()
      }
    }
  }

  logic = {
    damage: (health) => {
      if (health > 0)
        return health - 1 //Temporary damage ticker. Will think of a formula based on stats.
      else {
        return 0
      }
    },
    
    stop: () => {
      this.props.stop()
      this.logic.reset()
    },

    reset: () => {
      this.setState({
        health: 5,
        fun: 100,
        energy: 100,
        battery: 100,
        otts: 3,
      })
    }
  }

  controls = {
    blankie: () => {
      this.setState({
        battery: this.state.battery + 1
      })
    },

    shove: () => {
      this.state.otts > 0 ? this.setState({ otts: this.state.otts - 1 }) : console.log("No otts to squish");
    },

    stream: () => {
      this.setState({
        fun: this.state.fun + 1
      })
    },

    sleep: () => {
      this.setState({
        energy: this.state.energy + 1
      })
    }
  }

  render () {
    return (
      <main>
        <WinCard header="This is the Tsumi" className="GameArea">
          This is the game area This is the game area This is the game area This is the game area This is the game area This is the game area This is the game area This is the game area This is the game area This is the game area This is the game area This is the game area This is the game area This is the game area This is the game area This is the game area This is the game area This is the game area This is the game area This is the game area This is the game area 
        </WinCard>
        <aside>
          <WinCard header="Stats" className="Stats">
            <div className="StatsLabels">
              <p>Health: </p>
              <p>Fun: </p>
              <p>Oats: </p>
              <p>Sleep: </p>
              <p>Social battery: </p>
            </div>

            <div className="StatsValues">
              <p>{this.state.health}</p>
              <p>{this.state.fun}</p>
              <p>{this.state.otts}</p>
              <p>{this.state.energy}</p>
              <p>{this.state.battery}</p>
            </div>

          </WinCard>
          <WinCard header="Controls" className="Controls">
              <WinButton action={() => this.controls.blankie()}>Blankie</WinButton>
              <WinButton action={() => this.controls.shove()} >Shove Ott</WinButton>
              <WinButton action={() => this.controls.stream()}>Stream</WinButton>
              <WinButton action={() => this.controls.sleep()}>Sleep</WinButton>
          </WinCard>
        </aside>
      </main>
    )
  }
}

export default Main