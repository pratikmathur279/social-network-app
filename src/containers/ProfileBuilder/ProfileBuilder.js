import React, { Component } from 'react';
// import AboutPage from '../../components/AboutPage/AboutPage';

import Auxiliary from '../../hoc/Auxiliary';
import ProfileContainer from '../../components/Profile/ProfileContainer';
import Layout from '../../hoc/Layout/Layout';

import pratik from '../../assets/Images/pratik.jpg';
import Actions from '../../actions/Actions';

class AboutPageBuilder extends Component {
    constructor(){
        super();
        this.state = {
            image: pratik,
            userProfile: {email: 'pratik'}
        }; 
        this.actions = new Actions();   
    }

    componentDidMount(){
        let state = Object.assign({}, this.state);
        const user = sessionStorage.getItem('currentUser');
        console.log(user);
        this.actions.getUser(user, (data)=> {
            state.userProfile = data;
            console.log(state.userProfile);
            this.setState(state);
        });
    }
    render () {
        return (
            <div>
                <Layout loggedIn={this.state.loggedIn} />
                    <Auxiliary>
                        <ProfileContainer state={this.state} />
                    </Auxiliary>
            </div>
                
        );
    }
}

export default AboutPageBuilder;