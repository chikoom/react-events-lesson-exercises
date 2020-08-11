import React, { Component } from 'react'

class Contact extends Component {
  displayConvo = () => {
    this.props.displayConvo(this.props.name)
  }
  render() {
    return (
      <div>
        <span onClick={this.displayConvo}>{this.props.name}</span>
        {/* should render a "name" recieved in props */}
        {/* Should also reieve the displayConvo prop, and call the function onClick */}
      </div>
    )
  }
}

export default Contact
