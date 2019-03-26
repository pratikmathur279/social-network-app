import React from 'react';
import ProjectRow from './ProjectRow';
import Loading from '../UI/Loading/Loading';

const Projects= (props) => {

    return(
        <div>
        {props.loading && <Loading />}    
        {props.split.map((row, i)=> {
            return(
                <ProjectRow 
                    row={i}
                    projects={row}
                    openModalHandler = {props.openModalHandler}
                />
            )
        })}
        </div>
    )
}

export default Projects