import React from 'react';

import classes from './Profile.css';
import Image from '../../Images/Image';

const Profile = (props) => {
    return(
        <div className={classes.Profile}>
            <Image src={props.state.image} alt={props.alt} />
            <h3>{props.state.userProfile.name}</h3>
            <p>{props.state.userProfile.email}</p>
            {/* <Description desc={props.state.description} /> */}
        </div>
    )
}

export default Profile;

