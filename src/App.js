import { Component } from 'react'

import './App.scss'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      egg: 0,
      timer: 0
    }
  }

  incrementEgg = () => {
    this.setState({
      egg: this.state.egg + 1
    })
    console.log(this.state.egg)
  }

  tick = () => {
    this.setState({
      timer: this.state.timer + 1
    })
  }

  render() {
    return (
      <div className="App">
          <Header />
          <Main />
          <Footer increment={() => this.incrementEgg()} />
      </div>
    )
  }
}

export default App
