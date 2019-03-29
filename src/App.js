import React, { Component } from 'react';

import { Route, BrowserRouter, Redirect } from "react-router-dom";

import classes from './App.css';

import AuthBuilder from './containers/AuthBuilder/AuthBuilder';
import SocialNetworkBuilder from './containers/SocialNetworkBuilder/SocialNetworkBuilder';
import RegisterBuilder from './containers/RegisterBuilder/RegisterBuilder';
import ProfileBuilder from './containers/ProfileBuilder/ProfileBuilder';
import Logout from './components/Auth/Logout/Logout';
import Footer from '../src/components/UI/Footer/Footer';

const MINUTES_UNITL_AUTO_LOGOUT = 1 // in mins
const CHECK_INTERVAL = 1000 // in ms
const STORE_KEY =  'lastAction';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionActive: false,
      redirect: false
    }
    this.check();
    this.initListener();
    this.initInterval();
  }
 

  componentWillUpdate(){
    // sessionStorage.clear();
    console.log(this.state.redirect);
    // localStorage.removeItem('currentUser');
  }

  componentWillUnmount(){
    localStorage.clear();
    sessionStorage.clear();
  }

  getSession(){
    let state = Object.assign({}, this.state);
    const user = sessionStorage.getItem('currentUser');
    if(user){
      state.sessionActive = true;
      console.log("session active");
      return true;
    }
    else {
      return false;
    }
  }
  getLastAction() {
    return parseInt(localStorage.getItem(STORE_KEY));
  }
 
  setLastAction(lastAction) {
    localStorage.setItem(STORE_KEY, lastAction.toString());
  }
 
  initListener() {
    document.body.addEventListener('click', () => this.reset());
    document.body.addEventListener('mouseover',()=> this.reset());
    document.body.addEventListener('mouseout',() => this.reset());
    document.body.addEventListener('keydown',() => this.reset());
    document.body.addEventListener('keyup',() => this.reset());
    document.body.addEventListener('keypress',() => this.reset());
  }
 
  reset() {
    this.setLastAction(Date.now());
  }
 
  initInterval() {
    setInterval(() => {
    this.check();
    }, CHECK_INTERVAL);
  }
 
  check() {
    const now = Date.now();
    const timeleft = this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;
    if (isTimeout) {
      
      // alert('Session timed out due to inactivity'); // Call here logout function, expire session
      // sessionStorage.clear();
      // localStorage.clear();
      // this.setState({
      //   redirect: true
      // });
      // <Redirect to='/' />
    }
  }

  render () {
    {this.state.redirect ? <Redirect to='/' /> : ""}
    return (

      <BrowserRouter>
      <div classes={classes.App}>
    
          <div className={classes.Content}>
              <Route exact path="/" component={() => <AuthBuilder login={this.state.login} />}/>
              <Route path="/register" component={RegisterBuilder} />
              <Route path="/home" component={SocialNetworkBuilder}/>
              <Route path="/profile" component={ProfileBuilder} />
              <Route path="/logout" component={Logout} />
          </div>
        
        <Footer />
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
