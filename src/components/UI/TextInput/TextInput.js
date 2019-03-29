import React, {PropTypes} from 'react';
import classes from './TextInput.css';

const TextInput = (props) => {
    return (
        <div classes={classes.TextInput}>
          <div className={classes.Input}>
            <p htmlFor={props.name} className={classes.Label}>{props.name}</p>
            <input onChange={props.onChange} placeholder={props.name} id={props.id} type="text" name={props.name} value={props.value} type={props.type}/> 
          </div>
          <div>
            {props.errors && <p className={classes.InputError}>{props.errors[props.name]}</p>}
          </div>
        </div>
    )
};

export default TextInput;