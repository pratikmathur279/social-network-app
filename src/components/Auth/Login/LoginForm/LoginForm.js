import React from 'react';
import classes from './LoginForm.css';

import TextInput from '../../../UI/TextInput/TextInput';
import TextArea from '../../../UI/TextArea/TextArea';

const LoginForm = (props) => {

    return(
        <div className={classes.LoginForm}>
            <h3>Social Network App Login</h3>
            {/* {props.emailSent ? <p className={classes.EmailSent}>Email sent!</p>: ""} */}
            <div className={classes.Form}>
                <form>
                    <TextInput errors={props.errors} onChange={props.onChange} id="email" name="email" value={props.loginFormControls.email} />
                    <TextInput type="password" errors={props.errors} onChange={props.onChange} id="password" name="password" value={props.loginFormControls.password} />
                    <button type="button" onClick={props.onClick}>Login</button>
                    <div className={classes.RegisterLink}>
                    <p>Don't have an account? <a href="/register">Click here</a></p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default LoginForm;