import { Component } from 'react'
import WinCard from './WinComponents/WinCard'


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <WinCard header="Tsumigochi" >
          A random roguelike tamagochi game with zero progression, blankets and bullying.
        </WinCard>
      </div>
    )
  }
}

export default Header