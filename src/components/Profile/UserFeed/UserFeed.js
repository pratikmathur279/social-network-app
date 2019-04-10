import React from 'react';
import classes from './UserFeed.css';
import Feed from '../../Feed/Feed';

const UserFeed = (props) => {
    const buildItem = (item) => {
        return(
            <Feed key={item.id} item={item}/>
        );
    }

    return(
        <div className={classes.UserFeed}>
            <div className={classes.FeedContainer}>
                {props.profile.feed.map(buildItem)}
            </div>
        </div>
    );
}

export default UserFeed;