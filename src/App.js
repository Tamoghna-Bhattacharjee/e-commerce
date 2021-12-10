import './App.scss';
import React, {Component} from 'react';
import {Switch ,Route} from 'react-router-dom';
import {Homepage} from './Pages/HomePage/HomePage.jsx'
import ShopPage from './Pages/ShopPage/ShopPage.jsx'
import Header from './components/header/Header.jsx';
import SignIn_SignUp_Page from './Pages/SignIn_SignUp_Page/SignIn_SignUp_Page';
import { auth, addUser } from './components/firebase/firebase.util';
import { onSnapshot } from 'firebase/firestore';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currUser: null
    }
  }

  subscription = null;

  componentDidMount () {
    this.subscription = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const ref = await addUser(userAuth);
        onSnapshot(ref, (doc) => {
          this.setState({
            currUser: {
              id: doc.id,
              ...doc.data()
            }
          })
          //console.log(this.state);
        });
      } else this.setState({currUser: null});
    });
  }

  componentWillUnmount() {
    this.subscription();
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
