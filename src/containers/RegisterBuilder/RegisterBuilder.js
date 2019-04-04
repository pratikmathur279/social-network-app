import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';

import Layout from '../../hoc/Layout/Layout';
import pratik from '../../assets/Images/pratik.jpg';
import { Redirect } from 'react-router-dom';

import Actions from '../../actions/Actions';
import RegisterContainer from '../../components/Auth/Register/RegisterContainer';

class AuthBuilder extends Component {
    constructor(props) {
      console.log(props);
        super(props);
        this.state = {
            isFlipped: false,
            image: pratik,
            name: 'Pratik Mathur',
            redirect: false,
            registerFormControls: {
                name: '',
                mobile: '',
                email: '',
                password: ''
            },
            registerInitialState: {
                name: '',
                mobile: '',
                email: '',
                password: ''
            },
            errors: {},
            currentUser: {email: ''},
            loggedIn: false,
            loading: false,
            registered: false
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
      }

      onClick(e) {
        if(this.valid()){
          let state = Object.assign({}, this.state);
          state.loading = true;
          this.setState(state);
          let registerUser = state.registerFormControls;
          console.log(registerUser);
          this.actions.checkIfUserExists(registerUser, (data)=> {
              if(!data){
                  this.actions.createUser(registerUser, (data)=> {
                    this.actions.createUserActivity(registerUser, (data) => {
                        state.registerFormControls = state.registerInitialState;
                        state.registered = true;
                        state.errors.email = '';
                        state.loading = false;
                        this.setState(state);
                    });
                  });  
              }
              else {
                state.errors.email = "Email Address already exists!";
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
        state.registerFormControls[name] = value;
        this.setState(state);

    }

    valid(){
      let state = Object.assign({}, this.state);
      state.errors = {length: 0};
      
      if(state.registerFormControls.name === ''){
          state.errors.name = "Please enter a name.";
          state.errors.length += 1;
      }

      if(state.registerFormControls.email === ''){
          state.errors.email = "Please enter an email.";
          state.errors.length += 1;
      }

      if(state.registerFormControls.mobile === ''){
          state.errors.mobile = "Please enter a mobile number.";
          state.errors.length += 1;
      }

      if(state.registerFormControls.password === ''){
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
        console.log("redirect");
        return <Redirect to='/home' />
      }
    }

    render () {
        return (
            <Auxiliary>
              <Layout loggedIn={this.state.loggedIn} />

                <RegisterContainer 
                  {...this.state}
                  onChange={this.onChange}
                  onClick={this.onClick}
                />
                
            </Auxiliary>
        );
    }
}

export default AuthBuilder;