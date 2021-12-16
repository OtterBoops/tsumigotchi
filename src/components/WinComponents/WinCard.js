import { Component } from 'react'

import WinHeader from './WinHeader'
import WinBody from './WinBody'

import '../../styles/WinCard.scss'

export default class WinCard extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      hidden: false
    }
  }

  hide = () => {
    this.setState({
      hidden: true
    })
  }

  render () {
    return (
      <section className={`WinCard ${this.props.className} ${this.state.hidden ? "Hidden" : ""}`}>
        <WinHeader action={() => this.hide()}text={this.props.header} />
        <WinBody>
          {this.props.children}
        </WinBody> 
      </section>
    )
  }
}