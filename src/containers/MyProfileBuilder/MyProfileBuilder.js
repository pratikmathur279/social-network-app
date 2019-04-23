import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import ProfileContainer from '../../components/Profile/ProfileContainer';
import Layout from '../../hoc/Layout/Layout';
import Loading from '../../components/UI/Loading/Loading';
import { Redirect } from 'react-router-dom';

import Modal from '../../components/UI/Modal/Modal';
import Actions from '../../actions/Actions';
import UserFeed from '../../components/Profile/UserFeed/UserFeed';
import EditProfile from '../../components/Profile/EditProfile/EditProfile';

class MyProfileBuilder extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            profile: {},
            profiledata: {},
            initialState : {},
            showProject: false
        }; 
        this.onClick = this.onClick.bind(this);
        this.actions = new Actions();   
        this.handleChange = this.handleChange.bind(this);
        this.openModalHandler = this.openModalHandler.bind(this);
        this.closeModalHandler = this.closeModalHandler.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        this.checkAttributes = this.checkAttributes.bind(this);
        this.deleteFeedHandler = this.deleteFeedHandler.bind(this);
    }

    
    componentWillMount(){
        let state = Object.assign({}, this.state);
        const user = localStorage.getItem('currentUser');
        state.currentUser = user;
         this.actions.getUser(user, (data)=> {
            state.profile = data ;
            state.profiledata.email = data.email;
            state.id = data.id;
            state.profiledata.id = data.id;
            
            this.actions.userFollowingList(state.profile.email, (res)=> {
                state.profile.followingLength = res.data.length;
                this.actions.userFollowedList(state.profile.email, (res1)=>{
                    state.profile.followedLength = res1.data.length;
                    this.actions.getUserFeed(state.profiledata.email, (res) => {
                        state.profile.feed = res;
                        state.profile.feedCount = res.length;
                        
                        state.loading = false;
                        this.setState(state);
                    });
                });   
            });

        });
    }

    openModalHandler(){
        let state = Object.assign({}, this.state);

        state.showProject = true;
        this.setState(state);
    }

    closeModalHandler = () => {
        this.setState({showProject: false});
    }

    checkAttributes(){
        let state = Object.assign({}, this.state);

        if(!state.profiledata.hasOwnProperty('name') || state.profiledata.name.length <1){
            state.profiledata.name = state.profile.name;
        }
        if(!state.profiledata.hasOwnProperty('image')){
            state.profiledata.image = state.profile.image;
        }        
        if(!state.profiledata.hasOwnProperty('mobile') || state.profiledata.mobile.length <1){
            state.profiledata.mobile = state.profile.mobile;
        }
        if(!state.profiledata.hasOwnProperty('bio') || state.profiledata.bio.length <1){
            state.profiledata.bio = state.profile.bio;
        }
        this.setState(state);

        return true;
    }

    updateProfile = () => {
 
        if(this.state.files){
            this.actions.updateProfileImage(this.state.files, (data) => {
                let state = Object.assign({}, this.state);
                state.profiledata.image = data.data;
                
                if(this.checkAttributes()){
                    this.actions.updateProfile(state.profiledata, (data)=> {
                        // this.actions.updateUserImage(data, (newData)=> {
                            let temp = {email: state.profiledata.email, image: state.profiledata.image};
                            this.actions.updateProfileImageFeed(temp, (data) => {
                                this.forceUpdate();
                            });
                    });
                }
            });
        }
        else {
            if(this.checkAttributes()){
                this.actions.updateProfile(this.state.profiledata, (data)=> {
                    window.location.reload();
                });    
            }
        }
    }

    deleteFeedHandler(e){
        this.actions.deleteFeedItem(e.target.id, (res) => {
            window.location.reload();
        });
    }

    handleChange(e){
        const key = e.target.name;
        const value = e.target.value;
        let state = Object.assign({}, this.state);
        if(key === 'profile-image'){
            state.files = e.target.files[0]; 
        }
        if(key !== 'email'){
            state.profiledata[key] = value;
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

    onClick(){
          this.openModalHandler();
    }

    render () {
            return (
                <div>
                    <Layout loggedIn={this.state.loggedIn} />
                    {this.getSession()}
                    {this.state.loading ? <Loading /> 
                    :
                    <Auxiliary>
                            <Modal show={this.state.showProject} modalClosed={this.closeModalHandler}>
                                <EditProfile 
                                    onChange={this.handleChange} 
                                    updateProfile={this.updateProfile} 
                                    uploadImage = {this.uploadImage}
                                    {...this.state} />
                            </Modal>
                        
                            <ProfileContainer loading={this.state.loading} onClick={this.onClick} state={this.state} />
                            <UserFeed 
                                {...this.state}
                                deleteFeedHandler={this.deleteFeedHandler}
                            />
                        </Auxiliary>
                    }  
                        
                </div>
                    
            );
        }
        
    
}

export default MyProfileBuilder;