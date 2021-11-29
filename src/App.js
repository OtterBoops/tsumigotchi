import { Component } from 'react'
import { secondsToHms } from './logic/Helpers'

import './App.scss'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      egg: 0,
      timer: 0,
      running: null,
    }
  }

  tick = () => {
    this.interval = setInterval(() => {
      this.setState({
        timer: this.state.timer + 1,
      })
      
      if (this.state.egg >= 20 )
      window.location.href = "https://www.youtube.com/watch?v=dRvp78VB7Gw"
      
      console.log(`Gameloop tick ${this.state.timer}`)
    }, 1000)
  }

  incrementEgg = () => {
    this.setState({
      egg: this.state.egg + 1
    })
    console.log(this.state.egg)
  }

  start = () => {
    this.tick()
    this.setState({
      running: true,
    })
    console.log("Gameloop started")
  }

  stop = () => {
    this.setState({
      running: false,
      timer: 0,
      egg: 0
    })
    clearInterval(this.interval)
    console.log("Gameloop stopped")
  }

  render() {
    return (
      <div className="App">
          <Header start={() => this.start()} stop={() => this.stop()} />
          <Main time={this.state.timer} running={this.state.running} stop={() => this.stop()} />
          <Footer increment={() => this.incrementEgg()} time={`Survived ${secondsToHms(this.state.timer)}`} />
      </div>
    )
  }
}

export default App
