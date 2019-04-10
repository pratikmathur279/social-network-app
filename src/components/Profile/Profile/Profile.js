import React from 'react';

import classes from './Profile.css';
import Image from '../../Images/Image';

const Profile = (props) => {
    const url = `/assets/Images/${props.state.profile.image}`;
    console.log(url);
    const img = require(`../../../../public/assets/Images/${props.state.profile.image}`);
    console.log(img);
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

export default Profile;


