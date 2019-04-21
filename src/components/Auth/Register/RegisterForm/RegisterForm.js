import React from 'react';
import classes from './RegisterForm.css';

import TextInput from '../../../UI/TextInput/TextInput';
import TextArea from '../../../UI/TextArea/TextArea';

const RegisterForm = (props) => {

    return(
        <div className={classes.RegisterForm}>
            <h3>Create a new account</h3>

            <div className={classes.Form}>
                <form>
                    {props.registered ? <p className={classes.Registered}>Registration Successful!</p>: ""}
                    <TextInput errors={props.errors} onChange={props.onChange} id="name" name="name" value={props.registerFormControls.name} />
                    <TextInput errors={props.errors} onChange={props.onChange} id="mobile" name="mobile" value={props.registerFormControls.mobile} />
                    <TextInput errors={props.errors} onChange={props.onChange} id="email" name="email" value={props.registerFormControls.email} />
                    <TextInput type="password" errors={props.errors} onChange={props.onChange} id="password" name="password" value={props.registerFormControls.password} />
                    {/* <TextInput type="password" errors={props.errors} onChange={props.onChange} id="password2" name="confirm_password" value={props.registerFormControls.password2} /> */}
                    <button type="button" onClick={props.onClick}>Register</button>
                    
                    <div className={classes.RegisterLink}>
                    <p>Already registered? <a href="/">Click here</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;