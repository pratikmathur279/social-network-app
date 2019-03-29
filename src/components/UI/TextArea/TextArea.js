import React, {PropTypes} from 'react';
import classes from './TextArea.css';

const TextArea = (props) => {

    return (
      <div className={classes.TextArea}>
        <div className={classes.Input}>
            <p htmlFor={props.name} className={classes.Label}>{props.name}</p>
            <textarea maxLength="300" placeholder={props.value} onChange={props.onChange} id={props.id} name={props.name} value={props.value}/>
        </div>
        <div>
          {props.errors && <p className={classes.InputError}>{props.errors[props.name]}</p>}
        </div>
      </div>
        
    )
};

export default TextArea;