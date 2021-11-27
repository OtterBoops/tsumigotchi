import { Component } from "react"

import WinButton from './WinButton'

class WinHeader extends Component {
  render() {
    return (
      <div className={`WinHeader`}>
        <p>{this.props.text}</p>

        <div className="WinHeaderButtons">
          <WinButton><b>_</b></WinButton>
          <WinButton><b>◻</b></WinButton>
          <WinButton>X</WinButton>
        </div>
      </div>
    )
  }
}

export default WinHeader