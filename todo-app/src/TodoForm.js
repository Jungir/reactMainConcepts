import React, {Component} from 'react';

class TodoForm extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        if(e.target.value.length >= 1){
            this.setState({[e.target.id]: e.target.value});
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        if(this.state.content.length >= 1){
            this.props.addTodo(this.state);
            this.setState({content: ''});
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new Todo</label>
                    <input value={this.state.content} type="text" onChange={this.handleChange} id="content"/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
export default TodoForm;