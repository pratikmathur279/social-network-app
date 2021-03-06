import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Layout from '../../hoc/Layout/Layout';
import Loading from '../../components/UI/Loading/Loading';
import Actions from '../../actions/Actions';
import Modal from '../../components/UI/Modal/Modal';
import CreateNote from '../../components/CreateNote/CreateNote';
import Chat from '../../components/Chat/Chat';
import { Redirect } from 'react-router-dom';

import Homepage from '../../components/Homepage/Homepage';

class SocialNetworkBuilder extends Component {
    constructor(){
        super();
        this.state = {
            image: '',
            loading: true,
            showModal: false,
            loggedIn: false,
            feed: [],
            errors: {},
            note: {},
        }; 
        this.getSession = this.getSession.bind(this);
        this.actions = new Actions();
        this.onClick = this.onClick.bind(this);
        this.openModalHandler = this.openModalHandler.bind(this);
        this.closeModalHandler = this.closeModalHandler.bind(this);
        this.createNote = this.createNote.bind(this);
        this.valid = this.valid.bind(this);
        this.getFeed = this.getFeed.bind(this);
        this.handleNoteChange = this.handleNoteChange.bind(this);
    }

    componentWillMount(){
        let state = Object.assign({}, this.state);
        const user = sessionStorage.getItem('currentUser');
        if(user){
            state.loggedIn = true;
            state.currentUser = user;
        }
        else {
          state.loggedIn = false;
        }
        localStorage.setItem('currentUser', user);

        this.actions.getUser(user, (data)=>{
            state.note.name = data.name;
            state.note.email = data.email;
            state.note.image = data.image;
            this.getFeed((data)=>{
                state.feed = data;
                state.loading = false;
                this.setState(state);
            });
            
        })
        
    }

    getFeed(callback){
        this.actions.getFeed((data)=>{
            callback(data);
        });
        
    }
    valid(){
        let state = Object.assign({}, this.state);
        state.errors = {length: 0};
        if(state.note.message == ''){
            state.errors.message = "Please enter a message.";
            state.errors.length += 1;
        }
        this.setState(state);
        return state.errors.length === 0;
    }

    createNote() {
        const temp = this.valid();
        if(temp){
            this.actions.createNote(this.state.note, (data)=> {
                this.getFeed((data1)=>{
                    let state = Object.assign({}, this.state);
                    state.feed = data1;
                    state.showModal = false;
                    this.setState(state);
                    // this.render();
                    window.location.reload();
                });
            });
        }
        
    }

    handleNoteChange(e){
        const key = e.target.name;
        const value = e.target.value;
        
        let state = Object.assign({}, this.state);
        if(key === 'message'){
            state.note[key] = value;
        }
        this.setState(state);
    }

    onClick(){
        this.openModalHandler();
    }
    
    createRows(original){
        var arr = [];
        while(original.length > 0){
            var split = original.splice(0,3);
            arr.push(split);
        }
        return arr;
      }


      openModalHandler(){
        let state = Object.assign({}, this.state);

        state.showModal = true;
        this.setState(state);
    }

    closeModalHandler = () => {
        this.setState({showModal: false});
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
                    {this.state.loading ? <Loading /> 
                    :
                    
                        <Auxiliary>
                            

                            <div className="content">
                            {this.getSession()}

                                <Modal show={this.state.showModal} modalClosed={this.closeModalHandler}>
                                    
                                    <CreateNote 
                                        note={this.state.note} 
                                        onClick={this.createNote} 
                                        onChange={this.handleNoteChange}
                                        errors={this.state.errors}
                                    />
                                </Modal>

                                <Homepage 
                                    feed={this.state.feed}
                                    onClick={this.onClick}
                                />
                            </div>
                        </Auxiliary>
                    }
                    
                </div>
            );
    }
}

export default SocialNetworkBuilder;