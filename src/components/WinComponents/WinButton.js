import { Component } from "react"

class WinButton extends Component {
  render () {
    return (
      <div className="WinButton" onClick={this.props.action}>
        {this.props.children}
      </div> 
    )
  }
}

export default WinButton