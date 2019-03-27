import React from 'react';
import classes from './EditProfile.css';
import EditProfileForm from './EditProfileForm/EditProfileForm';

const EditProfile = (props) => {
    return(
        <div className={classes.EditProfile}>
            <h1>Edit Profile</h1>
            <EditProfileForm onChange={props.onChange} updateProfile={props.updateProfile} profiledata={props.profiledata}/>
        </div>
    );
}

export default EditProfile;