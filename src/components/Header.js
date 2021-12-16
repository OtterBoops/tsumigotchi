import { Component } from 'react'
import WinButton from './WinComponents/WinButton'
import WinCard from './WinComponents/WinCard'

import '../styles/Header.scss'


export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <WinCard header="Tsumigotchi">
          <div>
            <p>
            A random roguelike tamagochi game with zero progression, blankets and bullying. 
            </p>
            <p>
              Shove otters away to stop them from bullying you (and slow down point drain).
            </p>
            <p>
              Take care of your needs to heal up.
            </p>
            <p>
              Get bullied and lose the game.
            </p>
            <p>
              Ready? Press start. Want to instantly lose? Press stop.
            </p>
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