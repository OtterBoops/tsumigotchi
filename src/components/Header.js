import { Component } from 'react'
import WinButton from './WinComponents/WinButton'
import WinCard from './WinComponents/WinCard'

import '../styles/Header.scss'


class Header extends Component {
  render() {
    return (
      <header className="Header">
        <WinCard header="Tsumigochi">
          <div>
            A random roguelike tamagochi game with zero progression, blankets and bullying.
          </div>

          <div className="HeaderButtons">
            <WinButton action={this.props.start}>Start</WinButton>
            <WinButton action={this.props.stop}>Stop</WinButton>
          </div>
        </WinCard>
      </header>
    )
  }
}

export default Header