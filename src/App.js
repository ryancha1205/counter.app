import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Today from './Today';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome name='Jamie'/>
        <Today day="Wednesday" />
        <Counter />
      </div>
    );
  }
}

export default App;
