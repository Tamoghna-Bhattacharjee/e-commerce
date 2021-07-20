import './App.scss';
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Homepage} from './Pages/HomePage/HomePage.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact={true} path='/' component={Homepage} />
      </div>
    );
  }
}

export default App;
