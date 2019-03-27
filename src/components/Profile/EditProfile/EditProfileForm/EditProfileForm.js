import React from 'react';
import classes from './EditProfileForm.css';

import TextInput from '../../../UI/TextInput/TextInput';

const EditProfileForm = (props) => {
        return(
            <div className={classes.EditProfileForm}>
                
                <div className={classes.Form}>
                    <form>
                        {/* {props.profileUpdated ? <p className={classes.profileUpdated}>Profile Updated!</p>: ""} */}
                        <TextInput errors={props.errors} onChange={props.onChange} id="name" name="name" value={props.profiledata.name} />
                        <TextInput errors={props.errors} onChange={props.onChange} id="mobile" name="mobile" value={props.profiledata.mobile} />
                        <TextInput errors={props.errors} onChange={props.onChange} id="email" name="email" value={props.profiledata.email} />
                        <button type="button" onClick={props.updateProfile}>Update Profile</button>
                        
                    </form>
                </div>
            </div>
        )
    
}

export default EditProfileForm;