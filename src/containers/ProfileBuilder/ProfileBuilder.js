import React, { Component } from 'react';
// import AboutPage from '../../components/AboutPage/AboutPage';

import Auxiliary from '../../hoc/Auxiliary';
import ProfileContainer from '../../components/Profile/ProfileContainer';
import Layout from '../../hoc/Layout/Layout';
import Loading from '../../components/UI/Loading/Loading';
import { Redirect } from 'react-router-dom';

import Modal from '../../components/UI/Modal/Modal';
import pratik from '../../assets/Images/pratik.jpg';
import Actions from '../../actions/Actions';
import EditProfile from '../../components/Profile/EditProfile/EditProfile';

class ProfileBuilder extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: pratik,
            loading: true,
            profile: {},
            profiledata: {},
            showProject: false
        }; 
        this.onClick = this.onClick.bind(this);
        this.actions = new Actions();   
        this.handleChange = this.handleChange.bind(this);
        this.openModalHandler = this.openModalHandler.bind(this);
        this.closeModalHandler = this.closeModalHandler.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
    }

    componentDidMount(){
        console.log("mounted");
        let state = Object.assign({}, this.state);
        const user = localStorage.getItem('currentUser');
       
         this.actions.getUser(user, (data)=> {
            state.profile = data ;
            state.id = data.id;
            state.profiledata.id = data.id;
            state.loading = false;
            this.setState(state);
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

    updateProfile = () => {
        console.log(this.state);
    }

    handleChange(e){
        const key = e.target.name;
        const value = e.target.value;
        
        let state = Object.assign({}, this.state);
        state.profiledata[key] = value;

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
                    {this.state.loading && <Loading />}  
                        <Auxiliary>
                            {this.getSession()}
    
                            <Modal show={this.state.showProject} modalClosed={this.closeModalHandler}>
                                <EditProfile 
                                    onChange={this.handleChange} 
                                    updateProfile={this.updateProfile} 
                                    {...this.state} />
                            </Modal>
                        
                            <ProfileContainer loading={this.state.loading} onClick={this.onClick} state={this.state} />
                        </Auxiliary>
                </div>
                    
            );
        }
        
    
}

export default ProfileBuilder;