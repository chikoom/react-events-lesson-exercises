import React, { Component } from 'react'

class Task extends Component {
  complete = () => {
    this.props.markComplete(this.props.text)
  }

  render() {
    return (
      <div>
        <div>{this.props.text}</div>
        <button onClick={this.complete}>COMPLETED</button>
      </div>
    )
  }
}

export default Task
