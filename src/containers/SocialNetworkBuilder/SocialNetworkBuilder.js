import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Layout from '../../hoc/Layout/Layout';
import { Redirect, Route, BrowserRouter } from 'react-router-dom';

import pratik from '../../assets/Images/pratik.jpg';

class AboutPageBuilder extends Component {
    constructor(){
        super();
        this.state = {
            image: pratik,
            loggedIn: false
        }; 
        // this.renderRedirect = this.renderRedirect.bind(this);   
        this.getSession = this.getSession.bind(this);
    }

    componentWillMount(){
        let state = Object.assign({}, this.state);
        const user = sessionStorage.getItem('currentUser');
        if(user){
            state.loggedIn = true,
            state.currentUser = user;
        }
        else {
          state.loggedIn = false;
        }
        this.setState(state);
    }

    getSession(){
        const user = sessionStorage.getItem('currentUser');
        if(user){
            return true;
        }
        else {
          return <Redirect to="/" />;
        }
      }

    render () {
        return (
                <div>
                    <Layout loggedIn={this.state.loggedIn} />
                    <Auxiliary>
                        <div className="content">
                        {this.getSession()}
                            <h1>Welcome {this.state.currentUser}</h1>
                        </div>
                    </Auxiliary>
                </div>
            );
    }
}

export default AboutPageBuilder;