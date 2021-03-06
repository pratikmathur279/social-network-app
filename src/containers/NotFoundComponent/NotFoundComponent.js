import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Auxiliary from '../../hoc/Auxiliary';
import ErrorPage from '../../components/ErrorPage/ErrorPage';

class NotFoundComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            redirect: false
        }
    }

    componentDidMount(){
        setTimeout(() => {
            window.location.assign('/home');
        }, 5000);
    }


    render () {
        return (
            <Auxiliary>
                <div >
                    <ErrorPage redirect={this.state.redirect }/>
                </div>
            </Auxiliary>
        );
    }
}

export default NotFoundComponent;