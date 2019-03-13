import React from 'react';
import classes from './StatModule.css'

const statModule = (props) => {
    return (
        <div className={classes.StatModule} >
            <h1>
                {props.name}
            </h1>
            <p>
                {props.children}
            </p>
        </div>
    );
}

export default statModule;