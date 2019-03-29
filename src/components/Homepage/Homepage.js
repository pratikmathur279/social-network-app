import React from 'react';

import classes from './Homepage.css';
import Feed from '../Feed/Feed';

const Homepage = (props) => {
    const buildItem = (item) => {
        return(
            <Feed key={item.id} item={item}/>
        );
    }

    return(
        <div className={classes.Homepage}>
            <div className={classes.FeedContainer}>
                
                <div className={classes.feedCount}>
                    <p>{props.feed.length} notes</p>
                    <div className={classes.CreateItem}>
                        <button onClick={props.onClick}>Create Note</button>
                    </div>
                    
                </div>
                {props.feed.map(buildItem)}
            </div>
        </div>
    );
}

export default Homepage;