import React from 'react';
import { NavLink } from "react-router-dom";
import classes from './NavigationItem.css';

const navigationItem = ( props ) => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink to={props.to} className={classes.NavLink}>{props.children}</NavLink>
        </li>
    )
}

export default navigationItem;