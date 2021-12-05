import './App.scss';
import React, {Component} from 'react';
import {Switch ,Route} from 'react-router-dom';
import {Homepage} from './Pages/HomePage/HomePage.jsx'
import ShopPage from './Pages/ShopPage/ShopPage.jsx'
import Header from './components/header/Header.jsx';
import SignIn_SignUp_Page from './Pages/SignIn_SignUp_Page/SignIn_SignUp_Page';
import { auth } from './components/firebase/firebase.util';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currUser: null
    }
  }

  unsubscibeFromAuth = null;

  componentDidMount () {
    this.unsubscibeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currUser: user});
      //console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscibeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currUser = {this.state.currUser} />
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
