import React from 'react';

import classes from './Filler.css';

const Filler = (props) => (
    
        <div className={classes.Filler} style = {{ width: `${props.skill.percentage}% `}}><span value={props.skill.name}></span><span value={props.skill.percentage}></span>
         {/* <span>40</span>    */}
        </div>
        
    )

export default Filler;