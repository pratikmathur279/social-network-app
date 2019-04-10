import React from 'react';

import classes from './People.css'

const People = (props) => {
    // const image = require(`../../../build/static/media/${props.item.image}`)
    return (
        <div className={classes.People}>
            <div className={classes.User}>
                {/* <img className={classes.Image} src={image} /> */}
                <div className={classes.UserData}>
                    <h4>{props.item.name}</h4>
                    <p>{props.item.email}</p>
                    <p>{props.item.date}</p>
                </div>
            </div>
        </div>
    )
}

export default People;