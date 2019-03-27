import React from 'react';

import classes from './ProfileContainer.css';
import Profile from './Profile/Profile';
import Button from '../UI/Button/button';
import Loading from '../UI/Loading/Loading';

const ProfileContainer = (props) => {
    if(props.state.profile){
    return(
        <div className={classes.ProfileContainer}>
        {/* {props.loading && <Loading />}    */}
            <Profile state={props.state} />
            <div className={classes.EditButton}>
                <Button  clicked={props.onClick}>Edit Profile</Button>
            </div>

        </div>
    )
    }
    else {
        return null;
    }
}

export default ProfileContainer;