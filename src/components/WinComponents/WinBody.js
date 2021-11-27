import { Component } from "react"

class WinBody extends Component {
  render () {
    return (
      <div className={`WinBody`}>
        {this.props.children}
      </div> 
    )
  }
}

export default WinBody