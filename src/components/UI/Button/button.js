import React from 'react';

import classes from './button.css';

const button = (props) => 
{
 return(
    <button
        id={props.id}
        className={[classes.Button, props.followingUser ? classes.Success : '' , classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);
    }
export default button;