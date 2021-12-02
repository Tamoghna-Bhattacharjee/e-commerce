import './App.scss';
import React, {Component} from 'react';
import {Switch ,Route} from 'react-router-dom';
import {Homepage} from './Pages/HomePage/HomePage.jsx'
import ShopPage from './Pages/ShopPage/ShopPage.jsx'
import Header from './components/header/Header.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact={true} path='/' component={Homepage} />
          <Route exact={true} path='/shop' component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
