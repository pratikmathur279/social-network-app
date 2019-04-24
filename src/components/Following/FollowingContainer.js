import React from 'react';
import classes from './FollowingContainer.css';
import People from '../People/People/People';

const FollowingContainer = (props) => {
    console.log(props.profile)
    const buildItem = (item) => {
        return(
            <People key={item.id} item={item}/>
        );
    }

    return(
        <div className={classes.FollowingContainer}>
            { props.profile.followingList.length > 0 ? 
                props.profile.followingList.map(buildItem)    
                : <h3>No Followers! :(</h3>
            } 
            
        </div>
    );
}

export default FollowingContainer;