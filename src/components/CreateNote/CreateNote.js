import React from "react";

import classes from './CreateNote.css';
import TextInput from '../UI/TextInput/TextInput';
import TextArea from '../UI/TextArea/TextArea';

const CreateNote = (props) => {
    console.log(props);
    return(
        <div className={classes.CreateNote}>
            <div className={classes.CreateNoteContainer}>
            <h1>Create Note</h1>
                <TextInput errors={props.errors} onChange={props.onChange} id="name" name="name" value={props.note.name}  />
                <TextInput errors={props.errors} onChange={props.onChange} id="email" name="email" value={props.note.email} />
                <TextArea errors={props.errors} onChange={props.onChange} id="message" name="message" value={props.note.message} />
                <button type="button" onClick={props.onClick}>Create Note!</button>
            </div>
                        
        </div>
    );
}

export default CreateNote;