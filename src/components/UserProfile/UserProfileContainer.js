import React from 'react';

import classes from './UserProfileContainer.css';
import UserProfile from './UserProfile/UserProfile';
import Button from '../UI/Button/button';
import ProfileData from '../../components/Profile/ProfileData/ProfileData';
import UserFeed from '../Profile/UserFeed/UserFeed';

const UserProfileContainer = (props) => {
    if(props.state.profile){
    return(
        <div className={classes.UserProfileContainer}>
            <UserProfile state={props.state} />
            <ProfileData profile={props.state.profile}/>
            <UserFeed profile={props.state.profile} />
        </div>
    )
    }
    else {
        return null;
    }
}

export default UserProfileContainer;