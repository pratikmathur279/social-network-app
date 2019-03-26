import React from 'react';

import classes from './FooterImage.css';

const footerImage = ( props ) => (
    <div className={classes.footerImage}>
        <a href={props.url} target={props.target}>
            <img 
                src={props.src}
                alt={props.alt} />
            </a>
    </div>
);

export default footerImage;