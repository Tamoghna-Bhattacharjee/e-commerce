import './App.scss';
import React, {Component} from 'react';
import {Switch ,Route} from 'react-router-dom';
import {Homepage} from './Pages/HomePage/HomePage.jsx'

const Hats = () => {
  return (
    <div> <h1>HATS</h1></div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path='/' component={Homepage} />
          <Route exact={true} path='/hats' component={Hats} />
        </Switch>
      </div>
    );
  }
}

export default App;
