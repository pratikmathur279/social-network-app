import React from 'react';

import classes from './ProfileContainer.css';
import Profile from './Profile/Profile';
import Button from '../UI/Button/button';
import ProfileData from './ProfileData/ProfileData';

const ProfileContainer = (props) => {
    if(props.state.profile){
    return(
        <div className={classes.ProfileContainer}>
            <Profile state={props.state} />
            <div className={classes.EditButton}>
                <Button clicked={props.onClick}>Edit Profile</Button>
            </div>
            {/* <ProfileData profile={props.state.profile}/> */}
        </div>
    )
    }
    else {
        return null;
    }
}

export default ProfileContainer;