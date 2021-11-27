import { Component } from 'react'

import WinHeader from './WinHeader'
import WinBody from './WinBody'

import '../../styles/WinCard.scss'

class WinCard extends Component { 
  render () {
    return (
      <section className={`WinCard ${this.props.className}`}>
        <WinHeader text={this.props.header} />
        <WinBody>
          {this.props.children}
        </WinBody> 
      </section>
    )
  }
}

export default WinCard