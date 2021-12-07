import { Component } from 'react'

import { average, oneInX, randomDecrement, randomIncrement } from '../logic/Helpers'
import Otter from './Otter'
import Tsumi from './Tsumi'
import WinCard from './WinComponents/WinCard'
import WinButton from './WinComponents/WinButton'
import '../styles/Main.scss'
import '../styles/Stats.scss'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      health: 100,
      fun: 100,
      energy: 100,
      battery: 100,
      otts: 5,
    }
  }

  componentDidUpdate = (prevProps) => {
    if(JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
      if(this.props.running === true && this.state.health > 0) { // This is a death check bro, what the fuck? I forgot I put this here.
        this.logic.needs(0.25)
        this.logic.moreOtt(oneInX(2))
        // this.setState({
        //   health: this.logic.damage(this.state.health)
        // })
      } else {
        this.logic.stop() // This resets the game. 
      }
    }
  }

  logic = {
    damage: (health) => {
      return Math.max(0, health - 1) // Temporary damage dealing
    },

    needs: (multiplier) => {
      this.setState({
        battery: Math.max(0, parseInt(this.state.battery - (this.state.otts * multiplier))),
        fun: Math.max(0, parseInt(this.state.fun - (this.state.otts * multiplier))),
        energy: Math.max(0, parseInt(this.state.energy - (this.state.otts * multiplier))),
      })
    },

    stop: () => {
      this.props.stop()
      this.logic.reset()
    },

    moreOtt: (int) => {
      if (int === 1) this.setState({
        otts: this.state.otts + 1
      })
    },

    reset: () => {
      this.setState({
        health: 100,
        fun: 100,
        energy: 100,
        battery: 100,
        otts: 5,
      })
    }
  }

  controls = {
    blankie: () => {
      this.setState({
        battery: this.state.battery + randomIncrement(),
        fun: this.state.fun + randomDecrement(),
        energy: this.state.energy + randomDecrement()
      })
    },

    shove: () => {
      this.setState({
        otts: Math.max(0, this.state.otts - 1)
      })
    },

    stream: () => {
      this.setState({
        fun: this.state.fun + randomIncrement(),
        battery: this.state.battery + randomDecrement(),
        energy: this.state.energy + randomDecrement()
      })
    },

    sleep: () => {
      this.setState({
        energy: this.state.energy + randomIncrement(),
        battery: this.state.battery + randomDecrement(),
        fun: this.state.fun + randomDecrement()
      })
    }
  }

  render () {
    return (
      <main>
        <WinCard header="This is the Tsumi" className="GameArea">
          <div className="Hack">
            <Tsumi time={this.props.time} className={`Tsumi ${this.props.running ? "" : "Behind"}`}/>
          </div>
          {Array(this.state.otts).fill(
            <Otter time={this.props.time} className={`Otter ${this.props.running ? "" : "Behind"}`}/>
          )}

        </WinCard>
        <aside>
          <WinCard header="Tstats" className="Stats">
            <div className="StatsLabels">
              <p>Health: </p>
              <p>Social battery: </p>
              <p>Fun: </p>
              <p>Sleep: </p>
              <p>Oats: </p>
              <p>Avg of needs: </p>
            </div>

            <div className="StatsValues">
              <p>{this.state.health}</p>
              <p>{this.state.battery}</p>
              <p>{this.state.fun}</p>
              <p>{this.state.energy}</p>
              <p>{this.state.otts}</p>
              <p>{parseInt(average([this.state.battery, this.state.energy, this.state.fun]))}</p>
            </div>

          </WinCard>
          <WinCard header="Tsuntrols" className="Controls">
              <WinButton action={() => this.controls.blankie()}>Blankie</WinButton>
              <WinButton action={() => this.controls.stream()}>Stream</WinButton>
              <WinButton action={() => this.controls.sleep()}>Sleep</WinButton>
              <WinButton action={() => this.controls.shove()} >Shove Ott</WinButton>
          </WinCard>
        </aside>
      </main>
    )
  }
}

export default Main