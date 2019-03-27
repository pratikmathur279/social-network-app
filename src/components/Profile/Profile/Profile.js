import React from 'react';

import classes from './Profile.css';
import Image from '../../Images/Image';

const Profile = (props) => {
    return(
        <div className={classes.Profile}>
            <Image src={props.state.image} alt={props.alt} />
            <h3>{props.state.profile.name}</h3>
            <p>{props.state.profile.email}</p>
            <p>{props.state.profile.bio}</p>
            {/* <Description desc={props.state.description} /> */}
        </div>
    )
}

export default Profile;

