import { Component } from 'react'
import TsumiComf from '../resources/images/TsumiComf.png'

import '../styles/Footer.scss'

class Footer extends Component {

  render () {
    return (
      <footer>
        <div className="WinStartButton WinButton" onClick={this.props.increment}>
          <img src={TsumiComf} alt="TsumiComf"/>
          <p>TsuMenu</p>
        </div>
        <div>

        </div>
        <div className="WinClockArea">
          {this.props.time}
        </div>
      </footer>
    )
  }
}

export default Footer