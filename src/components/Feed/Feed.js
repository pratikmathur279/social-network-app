import React from 'react';

import pratik from '../../assets/Images/pratik.jpg';
import classes from './Feed.css'
import Image from '../Images/Image';

const Feed = (props) => {
    return (
        <div className={classes.Feed}>
            <div className={classes.User}>
                <img className={classes.Image} src={pratik} />
                <div className={classes.UserData}>
                    <h4>{props.item.name}</h4>
                    <p>{props.item.date}</p>
                </div>
            </div>
            
            <p>{props.item.message}</p>
        </div>
    )
}

export default Feed;