import React, { Component } from 'react'
import Task from './Task'

class SpotCheck5 extends Component {
  // Each task should be desplayed with a Task component.
  // Each Task should display the task's text, and a Complete button with the class "complete"
  // However, SpotCheck5 should filter out the tasks whose complete is true
  // Clicking the Complete button should change that task's complete to true in App's state

  constructor() {
    super()
    this.state = {
      tasks: [
        { text: 'Take out trash', complete: false },
        { text: 'Trash talk Carrie', complete: true },
        { text: 'Carry boxes upstairs', complete: false },
      ],
    }
  }

  markComplete = text => {
    const updatedTasks = [...this.state.tasks]
    updatedTasks.find(task => task.text === text).complete = true
    this.setState({
      tasks: updatedTasks,
    })
  }

  render() {
    return (
      <div>
        {this.state.tasks
          .filter(task => task.complete !== true)
          .map(completedTask => (
            <Task markComplete={this.markComplete} text={completedTask.text} />
          ))}
      </div>
    )
  }
}

export default SpotCheck5
