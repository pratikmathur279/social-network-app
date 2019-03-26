import React, { Component } from 'react';

import { Route, BrowserRouter } from "react-router-dom";

import classes from './App.css';

import AuthBuilder from './containers/AuthBuilder/AuthBuilder';
import SocialNetworkBuilder from './containers/SocialNetworkBuilder/SocialNetworkBuilder';
import RegisterBuilder from './containers/RegisterBuilder/RegisterBuilder';
import ProfileBuilder from './containers/ProfileBuilder/ProfileBuilder';
import Logout from './components/Auth/Logout/Logout';
import Footer from '../src/components/UI/Footer/Footer';


class App extends Component {
  
  constructor() {
    super();
    this.state = {
        sessionActive: false
    }
  }

  componentWillMount(){
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

  render () {
    return (
      <BrowserRouter>
      <div classes={classes.App}>
    
          <div className="content">
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
