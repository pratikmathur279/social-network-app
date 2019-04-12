import React from 'react';

import classes from './UserProfile.css';
import Image from '../../Images/Image';

const UserProfile = (props) => {
    const img = require(`../../../../public/assets/Images/${props.state.profile.image}`);
    return(
        <div className={classes.Profile}>
            <Image src={img} alt={props.alt} />
            <h3>{props.state.profile.name}</h3>
            <p>{props.state.profile.email}</p>
            <p>{props.state.profile.bio}</p>
            {/* <Description desc={props.state.description} /> */}
        </div>
    )
}

export default UserProfile;


