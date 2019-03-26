import React from 'react';
import classes from './ProjectInformation.css';

import Embr from '../../../assets/Images/Embr.png';
import totalmortgage from '../../../assets/Images/totalmortgage_website.png';
import burger from '../../../assets/Images/burger-builder.png';
import teams_chatbot from '../../../assets/Images/teams-chatbot.png';
import backgammon from '../../../assets/Images/backgammon.png';
import random_user from '../../../assets/Images/random-user.png';
import notfound from '../../../assets/Images/not_found.png';

const ProjectInformation = ( props ) => {

    let url = props.card.url;
    console.log(props.showProject);
    if(props.showProject){
        if(url.includes("embr")){
            url = Embr;
        }
        else if(url.includes('totalmortgage')){
            url = totalmortgage;
        }
        else if(url.includes('burger')){
            url = burger;
        }
        else if(url.includes('chatbot')){
            url = teams_chatbot;
        }
        else if(url.includes('backgammon')){
            url = backgammon;
        }
        else if(url.includes('random')){
            url = random_user;
        }
        else {
            url = notfound;
        }

    }

    return(
        <div className={classes.ProjectInformation}>
        <img id={props.card.index}
            src={url}
            alt={props.card.name}></img>
        <div className={classes.projectBody}>
            <h2>{props.card.name}</h2>
            <p>{props.card.description}</p>
            {props.card.github ? <p>To view the source code, <a href={props.card.github} target="_blank">click here</a></p> : ""}
            {props.card.live_instance ? <p><a href={props.card.live_instance} target="_blank">Click here</a> to play the game!</p>: ""}
            
        </div>
        
    </div>

    )    
}

export default ProjectInformation;