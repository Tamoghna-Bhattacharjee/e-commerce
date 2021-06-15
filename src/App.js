import './App.scss';
import React, {Component} from 'react';
import {Homepage} from './Pages/HomePage/HomePage.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
