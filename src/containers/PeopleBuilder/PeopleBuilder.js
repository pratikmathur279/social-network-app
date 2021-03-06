import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';

import Layout from '../../hoc/Layout/Layout';
import Modal from '../../components/UI/Modal/Modal';
import { Redirect } from 'react-router-dom';

import Actions from '../../actions/Actions';
import PeopleContainer from '../../components/People/PeopleContainer';
import UserProfileContainer from '../../components/UserProfile/UserProfileContainer';

class PeopleBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            currentUser: {},
            followingUser: false,
            peopleList: [],
            showProfile: false
        };
        this.actions = new Actions();
        this.getSession = this.getSession.bind(this);
        this.onClick = this.onClick.bind(this);
        this.openModalHandler = this.openModalHandler.bind(this);
        this.closeModalHandler = this.closeModalHandler.bind(this);
        this.openUserProfile = this.openUserProfile.bind(this);
        this.FollowUserToggle = this.FollowUserToggle.bind(this);
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
        this.actions.getUser(user, (res1) => {
            state.currentUserData = res1;
            this.actions.getAllPeople(user, (res)=>{
                state.peopleList = res.data;
                this.actions.userFollowingList(user, (res)=>{
                    state.followList = res.data;
                    
                    for(let x in state.peopleList){
                        for(let y in state.followList){
                            if(state.peopleList[x].id == state.followList[y].id){
                                state.peopleList[x].followingUser = true;
                            }
                        }
                    }
                    this.setState(state);
                });                
            });
        });        
    }

    openModalHandler(){
        let state = Object.assign({}, this.state);

        state.showProfile = true;
        this.setState(state);
    }

    FollowUserToggle(e){
        let state = Object.assign({}, this.state);
        for(let user in state.peopleList){
            if(state.peopleList[user].id == e.target.id){
                state.peopleList[user].followingUser = !(state.peopleList[user].followingUser);
                let currentUserId = state.currentUserData.id;
                if(state.peopleList[user].followingUser == true){
                    this.actions.followUser(currentUserId, state.peopleList[user].id, (data)=> {
                        this.setState(state);
                    });
                }
                else if(state.peopleList[user].followingUser == false){
                    this.actions.unfollowUser(currentUserId, state.peopleList[user].id, (data)=> {
                        this.setState(state);
                    });
                }
                
            }
        }
        
    }

    closeModalHandler = () => {
        this.setState({showProfile: false});
    }

    onClick(){
          this.openModalHandler();
    }

    openUserProfile(e){
        let id = e.target.id;
        let state = Object.assign({}, this.state);
        this.actions.getUserById(id, (res)=> {
            state.profile = res;
            this.actions.userFollowingList(state.profile.email, (res)=> {
                state.profile.followingLength = res.data.length;
                this.actions.userFollowedList(state.profile.email, (res1)=>{
                    state.profile.followedLength = res1.data.length;
                    this.actions.getUserFeed(state.profile.email, (data)=> {
                        state.profile.feed = data;
                        if(data.length == 0){
                            state.profile.feedCount = 0;
                        }
                        else {
                            state.profile.feedCount = data.length;
                        }
                        this.setState(state);
                        this.openModalHandler();    
                    })
                });
            });
            
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
            <div>
                {this.getSession()}
                <Layout loggedIn={this.state.loggedIn} />
                <Auxiliary>
                    <Modal show={this.state.showProfile} modalClosed={this.closeModalHandler}>
                        <UserProfileContainer state={this.state} />
                    </Modal>
                
                <PeopleContainer followingUser={this.state.followingUser} FollowUserToggle={this.FollowUserToggle} openUserProfile={this.openUserProfile} peopleList={this.state.peopleList } />

            </Auxiliary>
            </div>
            
        );
    }
}

export default PeopleBuilder;