import React from 'react';

import Embr from '../../../assets/Images/Embr.png';
import totalmortgage from '../../../assets/Images/totalmortgage_website.png';
import burger from '../../../assets/Images/burger-builder.png';
import teams_chatbot from '../../../assets/Images/teams-chatbot.png';
import backgammon from '../../../assets/Images/backgammon.png';
import classes from './Project.css';
import random_user from '../../../assets/Images/random-user.png';
import notfound from '../../../assets/Images/not_found.png';


const Project = ( props ) => {
    let url = props.src;

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
    return(
        <div className={classes.project} onClick={props.openModalHandler.bind(null, props.id)}>
                <img id={props.id} 
                    src={url}
                    alt={props.alt}></img>
            </div>
        )        
}

export default Project;