import React, {Component} from 'react';
import Todos from './Todos.js';
import TodoForm from './TodoForm';

class  App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play piano'},
      {id: 3, content: 'go out '},
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo=> {
      return todo.id !== id;
    });
    this.setState({todos});
  }
  addTodo = (todo) => {
    const newTodo = {...todo, id: Math.random()}
    // or todo['id'] = Math.random();
    const todos = [...this.state.todos, newTodo];
    this.setState({todos});
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <TodoForm addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App;
