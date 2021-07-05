import React from 'react';
import TodoForm from './components/TodoForm';
import {v4 as uuid} from 'uuid'
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ToDoItems: []
    }
  }

  updateToDoItems = (newItemName) => {
        const newItem = {
          name: newItemName,
          id: uuid(),
          completed: false,
        }
        this.setState({
          ToDoItems: [...this.state.ToDoItems, newItem]
        })
  }

  clearCompleted = () => {
    const newToDo = this.state.ToDoItems.filter(item => {
      return(item.completed === false);
    });


    this.setState({
      ToDoItems: newToDo
    })
  }

  toggleComplete = (id) => {
    const newToDoItems = this.state.ToDoItems.map(item => {
      if (item.id === id) {
        return {
            ...item,
            completed: !item.completed
          }
      } else {
        return (item)
      }
    })

    this.setState(
      {
        ToDoItems: newToDoItems
      }
    )
  }


  render() {
    
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm updateToDoItems={this.updateToDoItems} clearCompleted={this.clearCompleted}/>
        <TodoList ToDoItems={this.state.ToDoItems} toggleComplete={this.toggleComplete}/>
      </div>
    );
  }
}

export default App;
