import React from 'react';

import classes from './PeopleContainer.css';
import People from './People/People';

const PeopleContainer = (props) => {
    const buildItem = (item) => {
        return(
            <People key={item.id} followingUser={props.followingUser} FollowUserToggle={props.FollowUserToggle} openUserProfile={props.openUserProfile} item={item}/>
        )

    }

    return(
        <div className={classes.Container}>
            <h1>Friends</h1>
            <h5>Click on the image to view profile</h5>
            <div className={classes.PeopleContainer}>
                {props.peopleList.map(buildItem)}
            </div>
        </div>
 
    )
}

export default PeopleContainer;