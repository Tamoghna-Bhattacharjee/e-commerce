import './App.scss';
import React, {Component} from 'react';
import {Switch ,Route, Redirect} from 'react-router-dom';
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
          <Route exact={true} path='/signin' 
            render = { () => this.props.currUser ? (<Redirect to='/'/>): (<SignIn_SignUp_Page/>)}
          />
        </Switch>
      </div>
    );
  }
}

/*
  this will pass setCurrUser as the prop and when we use setCurrUser(user) it will trigger 
  setCurrentUser(user) action to all the reducers 
*/

const mapDispatchToProps = dispatch => {
  return {
    setCurrUser: (user) => dispatch(setCurrentUser(user))
  }
}

// this will pass the user state to our props
const mapStateToProps = ({user}) => {
  return {
    currUser: user.currUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
