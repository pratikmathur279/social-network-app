import React from 'react';
import classes from './LoginFormContainer.css';

import LoginForm from './LoginForm/LoginForm';

const LoginFormContainer = (props) => {

    return(
        <div className={classes.LoginFormContainer}>

            <LoginForm errors={props.errors} loginFormControls={props.loginFormControls} onChange={props.onChange} onClick={props.onClick} />
        </div>
    )
}

export default LoginFormContainer;