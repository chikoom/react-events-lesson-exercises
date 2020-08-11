import React, { Component } from 'react'
import List from './List'
import Conversation from './Conversation'

class Exercise2 extends Component {
  constructor() {
    super()
    this.state = {
      test: '',
      displayConversation: null,
      conversations: [
        {
          with: 'Laura',
          convo: [
            { text: 'Hi', sender: 'self' },
            { text: 'You there?', sender: 'self' },
            { text: "Yeah, hi, what's up?", sender: 'other' },
          ],
        },
        {
          with: 'Dad',
          convo: [
            {
              text: 'Have you finished your school work yet?',
              sender: 'other',
            },
            { text: 'Yes.', sender: 'self' },
            { text: 'What do you mean, yes?', sender: 'other' },
            { text: '??', sender: 'self' },
          ],
        },
        {
          with: 'Shoobert',
          convo: [
            { text: 'Shoobert!!!', sender: 'self' },
            { text: 'Dude!!!!!!!!', sender: 'other' },
            { text: 'Shooooooooo BERT!', sender: 'self' },
            { text: "You're my best friend", sender: 'other' },
            { text: "No, *you're* my best friend", sender: 'self' },
          ],
        },
      ],
    }
  }
  displayConvo = name => {
    this.setState({
      displayConversation: name,
    })
  }
  clearConvo = () => {
    this.setState({
      displayConversation: null,
    })
  }
  render() {
    return (
      <div>
        {(this.state.displayConversation && (
          <Conversation
            clearConvo={this.clearConvo}
            convo={this.state.conversations.find(
              conversation =>
                conversation.with === this.state.displayConversation
            )}
          />
        )) || (
          <List
            displayConvo={this.displayConvo}
            contacts={this.state.conversations.map(item => item.with)}
          />
        )}
      </div>
    )
  }
}

export default Exercise2
