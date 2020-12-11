import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const data = [
  {
    task:"Clean room.",
    id: 1,
    completed: false
  },
  {
    task:"Buy groceries.",
    id: 2,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      data
    };
  };

  addItem = (e, item) => {
    console.log("adding item")
    e.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      data: [...this.state.data, newItem]
    });
  };

  toggleItem = itemId => {
    this.setState({
      ...this.state,
      data: this.state.data.map((item) => {
        if(itemId === item.id) {
          return{
            ...item,
            completed: !item.completed
          }
        }
        else{
          return item;
        }
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      data: this.state.data.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>To Do List</h2>
          <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted}/>
        </div>
        <TodoList 
          data={this.state.data}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
