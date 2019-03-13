import React from 'react';
import classes from './Employee.css';

import EmployeeControls from './EmployeeControls/EmployeeControls';
import ConvertToCurrency from '../../../assets/functions/ConvertToCurrency/ConvertToCurrency';

const employee = (props) => {
    return (
        <div className={classes.Employee} >
            <h2>{props.name}</h2>
            <p>Workskill: {props.skill}</p>
            <p>Salary: {ConvertToCurrency(props.salary)}</p>
            <EmployeeControls fired={() => props.fired(props.id)} />
        </div>
    );
};

export default employee;