import { Component } from "react"

export default class WinButton extends Component {
  render () {
    return (
      <div className="WinButton" onClick={this.props.action}>
        {this.props.children}
      </div> 
    )
  }
}