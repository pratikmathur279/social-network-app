import React from 'react';

import classes from './IntroContainer.css';
import Image from '../../Images/Image';

const IntroContainer = (props) => {
    return(
        <div className={classes.IntroContainer}>
        <div className={classes.Image}>
            <Image src={props.image} alt={props.name}/>
        </div>
            <div className={classes.Description}>
                <p>I'm a Web Developer at Total Mortgage Services in Milford, CT. </p>
                <p>I have passion for creating intuitive, dynamic and cross-platform user experiences.</p>
            </div>
        </div>
    )
}

export default IntroContainer;