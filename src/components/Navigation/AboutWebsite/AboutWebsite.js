import React from 'react';

import classes from './AboutWebsite.css';
import MaterialIcon from 'material-icons-react';

const AboutWebsite = (props) => {

    return (
        <div className={classes.AboutWebsite} onClick={props.aboutToggleClicked} >
            <MaterialIcon icon="settings" size={35} />
        </div>
    )
}

export default AboutWebsite;