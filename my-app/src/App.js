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
  render(){
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas}/> 
        <FormNinja/>
      </div>
    );
  }
  
}

export default App;
