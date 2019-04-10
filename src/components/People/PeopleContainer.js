import React from 'react';

import classes from './PeopleContainer.css';
import People from './People/People';

const PeopleContainer = (props) => {
    const buildItem = (item) => {
        
        return(
            <People />
        )

    }

    return(
        <div className={classes.Container}>
            <h1>People</h1>
            <div className={classes.PeopleContainer}>
                {props.peopleList.map(buildItem)}
            </div>
        </div>
 
    )
}

export default PeopleContainer;