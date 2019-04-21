import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Layout from '../../hoc/Layout/Layout';
// import pratik from '../../assets/Images/pratik.jpg';
import LoginFormContainer from '../../components/Auth/Login/LoginFormContainer';
import { Redirect } from 'react-router-dom';

import Actions from '../../actions/Actions';

class AuthBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
            // image: pratik,
            name: 'Pratik Mathur',
            redirect: false,
            loginFormControls: {
              email: '',
              password: ''
          },
          loginInitialState: {
              email: '',
              password: ''
          },
          errors: {},
          currentUser: {email: ''},
          loggedIn: false
        };
        this.actions = new Actions();
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.setRedirect = this.setRedirect.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
        this.valid = this.valid.bind(this);
      }

      componentWillMount(){
        console.log(sessionStorage);
        console.log(localStorage);
        sessionStorage.clear();
        localStorage.clear();
      }

      onClick(e) {
        if(this.valid()){
            let state = Object.assign({}, this.state);
           
            let user = this.state.loginFormControls;
            this.actions.loginUser(user, (data, err)=> {
                if(data){
                    state.loginFormControls = state.loginInitialState;
            
                    sessionStorage.setItem('currentUser', user.email);
                    
                    const user1 = sessionStorage.getItem('currentUser');
                    this.setRedirect(state);
                }
                else {
                  state.errors.email = "Check your credentials";
                  state.errors.length += 1;
                  this.setState(state);
                }
            });            
        }

      }

      onChange(e){
        const name = e.target.name;
        const value = e.target.value;
        
        let state = Object.assign({}, this.state);
        state.loginFormControls[name] = value;
        this.setState(state);

    }

    valid(){
      let state = Object.assign({}, this.state);
      state.errors = {length: 0};
      
      if(state.loginFormControls.email === ''){
          state.errors.email = "Please enter an email.";
          state.errors.length += 1;
      }

      if(state.loginFormControls.password === ''){
          state.errors.password = "Please enter a password.";
          state.errors.length += 1;
      }

      this.setState(state);
      return state.errors.length === 0;
  }

    setRedirect(state) {
      state.redirect = true;
      this.setState(state);
    }

    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/home' />
      }
    }

    render () {
        return (
            <Auxiliary>
              <Layout loggedIn={this.state.loggedIn} />
                {this.renderRedirect()}
                <LoginFormContainer 
                  {...this.state}
                  onChange={this.onChange}
                  onClick={this.onClick}
                />
                
            </Auxiliary>
        );
    }
}

export default AuthBuilder;