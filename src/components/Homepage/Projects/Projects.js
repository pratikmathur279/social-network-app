import React from 'react';
import ReactCardFlip from 'react-card-flip';

import classes from './Projects.css';
import ProjectFront from './Project/ProjectFront';
import ProjectBack from './Project/ProjectBack';
// import project1 from '../../../assets/Images/Embr.png';
// import project2 from '../../../assets/Images/totalmortgage_website.png';
// import project3 from '../../../assets/Images/project-3.jpg';

const projects = (props) => {

    return(
        <div className={classes.Projects}>
            <div className={classes.ProjectDiv}>
                <div className={classes.ProjectsContainer}>

                {props.projects.map((project, index) => (
                    
                    <ReactCardFlip isFlipped={project.isFlipped}>
                        <ProjectFront key="front" id={project.index} mouseClick={props.mouseClick} src={project.url} alt={project.name}></ProjectFront>
                        <ProjectBack key="back" id={project.index} mouseClick={props.mouseClick} heading={project.heading} desc={project.description}></ProjectBack>
                    </ReactCardFlip>
                ))}

                </div>
            </div>
        </div>
    ) 
}

export default projects;