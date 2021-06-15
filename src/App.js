import './App.scss';
import React, {Component} from 'react';
import {Homepage} from './Pages/HomePage/Homepage.component.jsx'

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
