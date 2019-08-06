import React, {Component} from 'react';
import Ninjas from './Ninjas';
import FormNinja from './FormNinja';
//container/class component built with a class;
class App extends Component{
  state = {
    ninjas : [
      { name: 'Ryu', age : 30, belt : 'black', id: 1},
      { name: 'Kamil', age : 20, belt : 'green', id: 2},
      { name: 'Shaun', age : 23, belt : 'pink', id: 3}
    ]
  }
  addNinja = (newNinja) => {
    newNinja['id'] = Math.random();
    //spreading the origninal array,adding newNinja to it
    //mutating the original array but first making copy of it
    let ninjas = [...this.state.ninjas, newNinja];
    this.setState({
      ninjas : ninjas
    });
  }
  deleteNinja = (id) => {
    // console.log(id);
    let ninjas = this.state.ninjas.filter((curNinja) => {
      return curNinja.id !== id;
    });
    this.setState({
      ninjas : ninjas
    });
    
  }
  render(){
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/> 
        <FormNinja addNinja = {this.addNinja}/>
      </div>
    );
  }
  
}

export default App;
