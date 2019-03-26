import React from 'react';
import classes from './AboutDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

const AboutDrawer = (props) => {
    let attachedClasses = [classes.AboutDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.AboutDrawer, classes.Open];
    }
    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.AboutPageContainer}>
                    <h3>About this website</h3>
                    <div className={classes.Content}>
                        <p>This website was developed using:</p>
                        <ul>
                            <li>React JS</li>
                            <li>Serverless framework</li>
                            <li>AWS Lambda & DynamoDB</li>
                            <li>AWS EC2</li>
                        </ul>
                        <p>My goal was to create a single page application using the javascript frameworks, which will serve as my digital portfolio. You can view the source code of this website on <a href="https://github.com/pratikmathur279/my-website" target="_blank">Github</a>.</p>
                    </div>
                </div>
            </div>
        </Auxiliary>
    );
}

export default AboutDrawer;