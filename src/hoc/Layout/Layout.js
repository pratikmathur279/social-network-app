import React, { Component } from 'react';

import Auxiliary from '../Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            showSideDrawer: false,
            showAboutDrawer: false
        }
    }
    componentDidMount(){
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
    
    aboutDrawerClosedHandler = () => {
        this.setState({ showAboutDrawer: false });
    }

    aboutDrawerToggleHandler = () => {
        // alert("aboutDrawerToggle");
        this.setState( (prevState) => {
            return {showAboutDrawer: !prevState.showAboutDrawer}
        });
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Auxiliary>
                <Toolbar loggedIn={this.state.loggedIn} drawerToggleClicked={this.sideDrawerToggleHandler} aboutToggleClicked={this.aboutDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} 
                    loggedIn={this.state.loggedIn} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}

export default Layout;