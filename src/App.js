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
      running: false,
    }
  }



  // update = () => {
  //   while (this.state.running === true) {
  //     this.setState(() => ({
  //       timer: (this.state.timer + 1)
  //     })
  //   }
  // }

  update = () => {
    this.interval = setInterval(() => {
      this.setState({
        timer: this.state.timer + 1
      })
    }, 1000);
  }

  incrementEgg = () => {
    this.setState({
      egg: this.state.egg + 1
    })
    console.log(this.state.egg)
  }

  start = () => {
    this.update()
    this.setState({
      running: true,
    })
  }

  stop = () => {
    clearInterval(this.interval)
    this.setState({
      running: false,
      timer: 0
    })
  }

  render() {
    return (
      <div className="App">
          <Header start={() => this.start()} stop={() => this.stop()} />
          <Main time={this.state.timer} />
          <Footer increment={() => this.incrementEgg()} time={`Survived ${secondsToHms(this.state.timer)}`} />
      </div>
    )
  }
}

export default App
