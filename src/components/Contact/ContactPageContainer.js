import React from 'react';
import classes from './ContactPageContainer.css';

import ContactForm from './ContactForm/ContactForm';

const ContactPageContainer = (props) => {

    return(
        <div className={classes.ContactPageContainer}>

            <ContactForm emailSent={props.emailSent} errors={props.errors} formControls={props.formControls} onChange={props.onChange} onClick={props.onClick} />
        </div>
    )
}

export default ContactPageContainer;