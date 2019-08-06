import React, { Component } from 'react';

export default class FormNinja extends Component {
    state = {
        name: '',
        age: '',
        belt: ''
    }
    handleSubmit = (e) => { 
        e.preventDefault();
        this.props.addNinja(this.state);
        this.setState({
            name: '',
            age: '',
            belt: ''
        })
    }
    handleChange = (e)=> {
        // console.log(e.target.e);
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input value={this.state.name}type="text" onChange={this.handleChange} id="name"/>
                    <label htmlFor="age">Age</label>
                    <input value={this.state.age}onChange={this.handleChange} type="text" id="age"/>
                    <label htmlFor="belt">Belt</label>
                    <input value={this.state.belt} onChange={this.handleChange} type="text" id="belt"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
