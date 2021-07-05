import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
          toDoInput: ''
        }
      }

  handleChanges = e => {
    this.setState({
        toDoInput: e.target.value
    })
  };

  submit = e => {
      e.preventDefault()
      this.props.updateToDoItems(this.state.toDoInput)
      this.setState({
          toDoInput: ''
      })
  }

  clear = () => {
      this.props.clearCompleted()
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input type="text" name="toDoInput" value={this.state.toDoInput} onChange={this.handleChanges}/>
        <button>Add</button>
        <button onClick={this.clear} type='button'>Clear Completed</button>
      </form>
      
    );
  }
}

export default TodoForm;