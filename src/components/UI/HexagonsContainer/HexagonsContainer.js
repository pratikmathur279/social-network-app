import React from 'react';

import classes from './HexagonsContainer.css';
import MaterialIcon from 'material-icons-react';

const HexagonsContainer = (props) => {
 
    const buildRow = (hex) => {
        if(window.innerWidth <= '500'){
            return(
                <div key={hex.id} className={classes.AlignHexagon}>
                    <div className={classes.Hexagon}>
                        <div className={classes.Icons}>
                            <MaterialIcon key={hex.id} icon={hex.name} size={40} />
                        </div>
                        
                    </div>
                    <h3>{hex.title}</h3>
                        <p>{hex.desc}</p>
                </div>
    
            )
        }
        else {
            return(
                <div key={hex.id} className={classes.AlignHexagon}>
                    <div className={classes.Hexagon}>
                        <div className={classes.Icons}>
                            <MaterialIcon key={hex.id}  icon={hex.name} size={80} />
                        </div>
                        
                    </div>
                    <h3>{hex.title}</h3>
                            <p>{hex.desc}</p>
                </div>
    
            )
        }
        

    }
    return(
        <div className={classes.Container}>
            <div className={classes.HexagonsContainer}>
                {props.hexagons.map(buildRow)}
            </div>        
        </div>

    );

}

export default HexagonsContainer;