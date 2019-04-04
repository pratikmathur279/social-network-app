import React from 'react';
import classes from './ErrorPage.css';

const ErrorPage = (props) => {
    return(
        <div className={classes.ErrorPage}>
            <p>Redirecting to homepage</p>
            <img src={require('../../assets/Images/404-error-page-not-found.jpg')}></img>
            
        </div>
    );
}

export default ErrorPage;