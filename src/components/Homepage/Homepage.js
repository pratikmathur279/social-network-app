import React from 'react';

import classes from './Homepage.css';
import HomePageContainer from '../Homepage/HomepageContainer/HomepageContainer';
import SkillsBar from '../Homepage/SkillsBar/SkillsBar';
import HexagonsContainer from '../UI/HexagonsContainer/HexagonsContainer';
import IntroContainer from '../Homepage/IntroContainer/IntroContainer';

const Homepage = (props) => {
    
    return(
        <div className={classes.Homepage}>
            <div className={classes.HomePageContainer}>
                <HomePageContainer/>
            </div>
            <div className={classes.HexagonsContainer}>
                {props.hexagons.map((row, i)=> {
                    return(
                        <HexagonsContainer key={row.id}
                        row={i}
                        hexagons={row}
                    />
                    )
                })}
            </div>
            
            <div className={classes.Container2}>
                <div className={classes.IntroContainer}>
                    <IntroContainer image={props.image}/>
                </div>
                <div className={classes.SkillsContainer}>
                    <SkillsBar skills={props.skills}/>
                </div>
            </div>
        </div>
    )
}

export default Homepage;