import React from 'react';

import classes from './HomepageContainer.css';

const HomepageContainer = (props) => {
    return(
        <div className={classes.HomepageContainer}>
            <div className={classes.name}>
                    <h1>PRATIK MATHUR</h1>
                </div>
                <div className={classes.title}>
                    <h3>WEB APPLICATION DEVELOPER</h3>
            </div>
        </div>
    )
}

export default HomepageContainer;

