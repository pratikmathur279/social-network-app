import React from 'react';

import classes from './Experience.css';

const Experience = ( props ) => {

    const client = props.data.client;

    const buildRow = (responsibility) => (
        <li>{responsibility}</li>
    );

    return(
        <div className={classes.Experience}>
            <h3>{props.data.name}</h3>
           
            <div className={classes.container}>
                <h4>{props.data.position}</h4>
                <p>{props.data.from} - {props.data.to}</p>
            </div>
            {client ? <h4>Client: {client}</h4>: ""}
            <h4>Responsibilities:</h4>
            <ul className={classes.responsibilities}>
                {props.data.responsibilities.map(buildRow)}
            </ul>
            <p><span>Environment: </span>{props.data.environment}</p>
        </div>
    )
}
    

export default Experience;