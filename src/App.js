import './App.scss';
import React, {Component} from 'react';
import {Switch ,Route} from 'react-router-dom';
import {Homepage} from './Pages/HomePage/HomePage.jsx'
import ShopPage from './Pages/ShopPage/ShopPage.jsx'
import Header from './components/header/Header.jsx';
import SignIn_SignUp_Page from './Pages/SignIn_SignUp_Page/SignIn_SignUp_Page';
import { auth, addUser } from './components/firebase/firebase.util';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './components/redux/user/user_action';

class App extends Component {

  subscription = null;

  componentDidMount () {
    const {setCurrUser} = this.props;
    this.subscription = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const ref = await addUser(userAuth);
        onSnapshot(ref, (doc) => {
          setCurrUser({
              id: doc.id,
              ...doc.data()            
          });
        });
      } else setCurrUser(null);
    });
  }

  componentWillUnmount() {
    this.subscription();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact={true} path='/' component={Homepage} />
          <Route exact={true} path='/shop' component={ShopPage} />
          <Route exact={true} path='/signin' component={SignIn_SignUp_Page} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrUser: (user) => dispatch(setCurrentUser(user))
  }
}

export default connect(null, mapDispatchToProps)(App);
