import React from 'react';
import classes from './UserFeed.css';
import Feed from '../../Feed/Feed';

const UserFeed = (props) => {
    const buildItem = (item) => {
        return(
            <Feed key={item.id} item={item} deleteFeedHandler={props.deleteFeedHandler} />
        );
    }

    return(
        <div className={classes.UserFeed}>
            <div className={classes.FeedContainer}>
            { props.profile.feedCount > 0 ? 
            props.profile.feed.map(buildItem)    
                : <h3>No feed items!</h3>
        } 
                
            </div>
        </div>
    );
}

export default UserFeed;