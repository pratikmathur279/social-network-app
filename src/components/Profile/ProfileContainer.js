import React from 'react';

import classes from './ProfileContainer.css';
import Profile from './Profile/Profile';

const ProfileContainer = (props) => {
    return(
        <div className={classes.ProfileContainer}>
            <Profile state={props.state} />
        </div>
    )
}

export default ProfileContainer;