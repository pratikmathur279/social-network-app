import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';

import Layout from '../../hoc/Layout/Layout';
import { Redirect } from 'react-router-dom';

import Actions from '../../actions/Actions';
import PeopleContainer from '../../components/People/PeopleContainer';

class PeopleBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            currentUser: {},
            peopleList: []
        };
        this.actions = new Actions();
        this.getSession = this.getSession.bind(this);
    }
  
    componentWillMount(){
        const user = sessionStorage.getItem('currentUser');
        let state = Object.assign({}, this.state);
        if(user){
            state.loggedIn = true;
            state.currentUser = user;
        }
        else {
          state.loggedIn = false;
        }

        this.actions.getAllPeople((res)=>{
            state.peopleList = res.data;
            this.setState(state);
        });
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
            <Auxiliary>
              <Layout loggedIn={this.state.loggedIn} />
                {this.getSession()}
                <PeopleContainer peopleList={this.state.peopleList } />

            </Auxiliary>
        );
    }
}

export default PeopleBuilder;