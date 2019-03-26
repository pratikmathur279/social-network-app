import React from 'react';

import classes from './ProjectBack.css';

const projectBack = ( props ) => (
    <div className={classes.projectBack} >
        <div className={classes.projectDesc} id={props.id} onClick={props.mouseClick}>
            <h5>{props.heading}</h5>
            <p>{props.desc}</p>
        </div>
    </div>
);

export default projectBack;