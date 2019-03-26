import React from 'react';
import classes from './RegisterContainer.css';

import RegisterForm from './RegisterForm/RegisterForm';

const RegisterContainer = (props) => {

    return(
        <div className={classes.RegisterContainer}>

            <RegisterForm registered={props.registered} errors={props.errors} registerFormControls={props.registerFormControls} onChange={props.onChange} onClick={props.onClick} />
        </div>
    )
}

export default RegisterContainer;