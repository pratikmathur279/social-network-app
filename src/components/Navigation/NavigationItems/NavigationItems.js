import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    const loggedIn = props.loggedIn;
    return (
        <div>
            {!loggedIn ? 
                <ul className={classes.NavigationItems}>
                    <NavigationItem to="/">Login</NavigationItem>
                    <NavigationItem to="/register">Register</NavigationItem>
                </ul>
                : 
                <ul className={classes.NavigationItems}>
                    <NavigationItem to="/home">Home</NavigationItem>
                    <NavigationItem to="/profile">Profile</NavigationItem>
                    <NavigationItem to="/people">People</NavigationItem>
                    <div className={classes.Logout}>
                        <NavigationItem to="/logout" >Logout</NavigationItem>
                    </div>
                </ul>
                }
        </div>
        
        
    )
}
    

export default navigationItems;