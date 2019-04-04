import React from 'react';
import classes from './ProfileDataItem.css';

const ProfileDataItem = (props) => {
    return(
        <div className={classes.ProfileDataItem}>
            <p>{props.count}</p>
            <p>{props.value}</p>
        </div>
    )
}

export default ProfileDataItem;