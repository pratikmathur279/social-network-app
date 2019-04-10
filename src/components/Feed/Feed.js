import React from 'react';

import classes from './Feed.css'

const Feed = (props) => {
    const image = require(`../../../public/assets/Images/${props.item.image}`);
    
    return (
        <div className={classes.Feed}>
            <div className={classes.User}>
                <img className={classes.Image} src={image} />
                <div className={classes.UserData}>
                    <h4>{props.item.name}</h4>
                    <p>{props.item.email}</p>
                    <p>{props.item.date}</p>
                </div>
            </div>
            
            <p>{props.item.message}</p>
        </div>
    )
}

export default Feed;