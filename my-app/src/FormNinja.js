import React, { Component } from 'react';

export default class FormNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleSubmit = (e) => { 
        e.preventDefault();
        console.log(this.state);
    }
    handleChange = (e)=> {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" onChange={this.handleChange} id="name"/>
                    <label htmlFor="age">Age</label>
                    <input  onChange={this.handleChange} type="text" id="age"/>
                    <label htmlFor="belt">Belt</label>
                    <input  onChange={this.handleChange} type="text" id="belt"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
