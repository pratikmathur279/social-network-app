import React from 'react';
import classes from './EditProfile.css';
import EditProfileForm from './EditProfileForm/EditProfileForm';

const EditProfile = (props) => {
    return(
        <div className={classes.EditProfile}>
            <h1>Edit Profile</h1>
            <EditProfileForm uploadImage={props.uploadImage} onChange={props.onChange} updateProfile={props.updateProfile} profiledata={props.profiledata} image={props.profile.image} />
        </div>
    );
}

export default EditProfile;