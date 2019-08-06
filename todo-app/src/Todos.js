import React from 'react';
//functional/UI component
const Todos = function  (props) {
    const {todos, deleteTodo} = props;
    const todoList = todos.length ?
        (todos.map( todo => {
            return (
                <div key={todo.id} className="collection-item">
                    <span>{todo.content}</span>
                    <button onClick={()=> {deleteTodo(todo.id)}}>delete</button>
                </div>
            )
        })
        ) : 
        (<p className="center">You have no todos left. Yeeee!</p>);
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;