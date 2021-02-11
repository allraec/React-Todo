import React from 'react';
import TodoList from './components/TodoList'
import './components/Todo.css'

const tasks = [
  {
    task: 'Clean room.',
    id: 1,
    completed: false
  },
  {
    task: 'Do laundry.',
    id: 12,
    completed: false
  },
  {
    task: 'Buy groceries.',
    id: 123,
    completed: false
  }
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      tasks: tasks
    }
  }
  toggleCompleted = (taskId) => {

    console.log("toggling", taskId)
    const newTasks = this.state.tasks.map(task => {
      if(taskId === task.id){
        return {
          ...task,
          completed: !task.completed
        }
      }
      else{ return task;}
    })

    this.setState({
      ...this.state,
      tasks: newTasks
    })

    console.log(this.state)

  }
  render() {
    return (
      <div>
        <TodoList tasks={this.state.tasks} toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
