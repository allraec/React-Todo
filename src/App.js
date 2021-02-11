import React from 'react';
import TodoList from './components/TodoList'
import './components/Todo.css'
import TodoForm from './components/TodoForm'

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

  addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      task: taskName,
      completed: false
    }

    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask]
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Todo List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList tasks={this.state.tasks} toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
