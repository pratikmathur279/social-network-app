import React from 'react';

import classes from './ProfileData.css';
import ProfileDataItem from './ProfileDataItem/ProfileDataItem';

const ProfileData = (props) => {
    console.log(props);
    return(
        <div className={classes.ProfileData} >
            <ProfileDataItem value="Notes" count={props.profile.feedCount} />
            <ProfileDataItem value="Followers" count="1" />
            <ProfileDataItem value="Following" count="1" />
            <ProfileDataItem value="Profile Views" count="1" />
        </div>
    )
}

export default ProfileData;