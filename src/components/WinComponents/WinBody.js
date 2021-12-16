import { Component } from "react"

export default class WinBody extends Component {
  render () {
    return (
      <div className={`WinBody`}>
        {this.props.children}
      </div> 
    )
  }
}