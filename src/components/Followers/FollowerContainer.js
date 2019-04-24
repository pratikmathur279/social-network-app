import React from 'react';
import classes from './FollowerContainer.css';
import People from '../People/People/People';

const FollowerContainer = (props) => {
    const buildItem = (item) => {
        return(
            <People key={item.id} item={item}/>
        );
    }

    return(
        <div className={classes.FollowerContainer}>
            { props.profile.followedList.length > 0 ? 
                props.profile.followedList.map(buildItem)    
                : <h3>No Followers! :(</h3>
            } 
            
        </div>
    );
}

export default FollowerContainer;