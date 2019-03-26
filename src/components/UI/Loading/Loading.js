import React from 'react';
import classes from './Loading.css';
import loadingGIF from '../../../assets/Images/loading.gif';

const Loading = () => {
    return (
        // <div className={classes.spinner}></div>
        <div className={classes.Loading}>
            <img src={loadingGIF}></img>
        </div>
    )
}

export default Loading;