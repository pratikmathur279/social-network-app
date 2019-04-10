import React from 'react';
import classes from './EditProfileForm.css';

// import pratik from '../../../../assets/Images/pratik.jpg';
import TextInput from '../../../UI/TextInput/TextInput';
import TextArea from '../../../UI/TextArea/TextArea';
import Image from '../../../Images/Image';

const EditProfileForm = (props) => {
    
    const url = `/public/assets/Images/${props.image}`;
    console.log(url);
    const profile_image = require(`../../../../../public/assets/Images/${props.image}`);
    console.log(profile_image);
    return(
            <div className={classes.EditProfileForm}>
                
                <div className={classes.Form}>
                    <form>
                        <Image className={classes.Image} alt="My Image" onChange={props.onChange} name="profile-image" src={profile_image}/>
                        <input className={classes.File} type="file" onChange={props.onChange} name="profile-image"></input>
                        {/* <button type="button" value={props.profiledata.image} onClick={props.uploadImage}>Upload new image</button> */}
                        {/* {props.profileUpdated ? <p className={classes.profileUpdated}>Profile Updated!</p>: ""} */}
                        <div className={classes.FormDiv}>
                            <TextInput errors={props.errors} onChange={props.onChange} id="name" name="name" value={props.profiledata.name} />
                            <TextInput errors={props.errors} onChange={props.onChange} id="mobile" name="mobile" value={props.profiledata.mobile} />
                        </div>
                        <div className={classes.FormDiv} >
                            <TextInput errors={props.errors} onChange={props.onChange} id="email" name="email" value={props.profiledata.email} />
                            <TextArea errors={props.errors} onChange={props.onChange} id="bio" name="bio" value={props.profiledata.bio} />
                        </div>
                        
                        <button type="button" onClick={props.updateProfile}>Update Profile</button>
                        
                    </form>
                </div>
            </div>
        )
    
}

export default EditProfileForm;