import React from 'react';
import classes from './ProfileDataItem.css';

const ProfileDataItem = (props) => {
    return(
        <div className={classes.ProfileDataItem}>
            <p onClick={props.setActiveTab} id={props.name} >{props.value}  {props.count}</p>
        </div>
    )
}

export default ProfileDataItem;