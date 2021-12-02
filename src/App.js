import './App.scss';
import React, {Component} from 'react';
import {Switch ,Route} from 'react-router-dom';
import {Homepage} from './Pages/HomePage/HomePage.jsx'
import ShopPage from './Pages/ShopPage/ShopPage.jsx'
import Header from './components/header/Header.jsx';
import SignIn_SignUp_Page from './Pages/SignIn_SignUp_Page/SignIn_SignUp_Page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact={true} path='/' component={Homepage} />
          <Route exact={true} path='/shop' component={ShopPage} />
          <Route exact={true} path='/signin' component={SignIn_SignUp_Page} />
        </Switch>
      </div>
    );
  }
}

export default App;
