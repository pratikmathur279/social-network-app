import React from 'react';

import classes from './button.css';

const button = (props) => 
{
    console.log(props.followingUser);
    if(props.followingUser){
        return(
            <button
                id={props.id}
                className={[classes.Button, classes.Success, classes[props.btnType]].join(' ')}
                onClick={props.clicked}>{props.children}</button>
        );
    }
    else{
        return(
            <button
                id={props.id}
                className={[classes.Button, classes.NotFollowing , classes[props.btnType]].join(' ')}
                onClick={props.clicked}>{props.children}</button>
        );
    }
 

    }
export default button;