import React from 'react';
import classes from './Stats.css';

import ConvertToCurrency from '../../assets/functions/ConvertToCurrency/ConvertToCurrency';
import StatModule from './StatModule/StatModule';

const stats = (props) => {
    const statModules = [
        {
            name: "Money",
            content: ConvertToCurrency(props.money),
        },
        {
            name: "Number of Employees",
            content: "You own " + props.numEmployees + " employees.",
        },
    ];

    const moduleElements = statModules.map((statModule, index) => {
        return (
            <StatModule name={statModule.name} key={index} >{statModule.content}</StatModule>     
        );
    });

    return (
        <div className={classes.Statbox} >
            {moduleElements}
        </div>
    );
};

export default stats;