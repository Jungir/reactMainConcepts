import React from 'react';
import Ninjas from './Ninjas';

function App() {
  return (
    <div className="App">
      
      <h1>My first react app</h1>
      <p>Welcome</p>
      <Ninjas name="Ryu" age="25" belt="black"/>
      <Ninjas name="Kamil" age="23" belt="black"/>
      <Ninjas name="Clair" age="21" belt="green"/>
    </div>
  );
}

export default App;
