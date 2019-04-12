import React from 'react';

import classes from './People.css';
import Button from '../../UI/Button/button';

const People = (props) => {
    return (
        <div className={classes.People}>
            <div className={classes.UserContainer}>
                <div className={classes.User}>
                    <img  onClick={props.openUserProfile} id={props.item.id} className={classes.Image} src={require(`../../../../public/assets/Images/${props.item.image}`)} />
                    <div className={classes.UserData }>
                        <h4 >{props.item.name}</h4>
                        <p>{props.item.email}</p>
                        <p>{props.item.date}</p>
                    </div>
                </div>
                <div className={classes.FollowButton}>
                    {!props.item.followingUser ? 
                        <Button followingUser={props.item.followingUser} clicked={props.FollowUserToggle} id={props.item.id}>Follow</Button>
                    :
                        <Button followingUser={props.item.followingUser} clicked={props.FollowUserToggle} id={props.item.id}>Following</Button>
                     }
                    
                </div>
            </div>
            
        </div>
    )
}

export default People;