import React from 'react'

class SimpleComponent extends React.Component {
  state = { mood: 'happy' }

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>
  }

  handleClick = () => {
    this.setState({
      mood: this.state.mood === 'happy' ? 'sad' : 'happy'
    })
  }
}

export default SimpleComponent
