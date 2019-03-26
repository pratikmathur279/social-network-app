import React from 'react';

import classes from './WorkExperience.css';
import Experience from './Experience/Experience';
import Loading from '../UI/Loading/Loading';

const WorkExperience = (props) => {
    
    const buildRow = (exp) => {
        // console.log(card);
        return (
            <div key={exp.id} className={classes.experience} >
                <Experience data={exp} />
            </div>
        );
    }

    return (
        <div className={classes.WorkExperience}>
            <div className={classes.Header}>
                <h1>Professional Experience</h1>
            </div>
            {props.loading && <Loading />}
            <div className={classes.WorkExperienceRow}>
                {props.experience.map(buildRow)}
            </div>
        </div>
    )
}

export default WorkExperience;