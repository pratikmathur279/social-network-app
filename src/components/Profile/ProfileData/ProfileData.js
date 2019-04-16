import React from 'react';

import classes from './ProfileData.css';
import ProfileDataItem from './ProfileDataItem/ProfileDataItem';

const ProfileData = (props) => {
    return(
        <div className={classes.ProfileData} >
            <ProfileDataItem value="Notes" count={props.profile.feedCount} />
            <ProfileDataItem value="Followers" count={props.profile.followedLength}  />
            <ProfileDataItem value="Following" count={props.profile.followingLength} />
            <ProfileDataItem value="Profile Views" count="1" />
        </div>
    )
}

export default ProfileData;