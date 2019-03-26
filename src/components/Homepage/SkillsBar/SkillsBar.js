import React from 'react';

import classes from './SkillsBar.css';
import Filler from './Filler/Filler';

const SkillsBar = (props) => {

    const buildSkillsBar = (skill) => (
        <div key={skill.index} className={classes.SkillsBar}>
            <Filler skill={skill} />
        </div>
    )
    return(
        <div className={classes.SkillsBarContainer}>
            {props.skills.map(buildSkillsBar)}
        </div>
    )
}

export default SkillsBar;
