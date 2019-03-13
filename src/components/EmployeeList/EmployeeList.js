import React from 'react';
import classes from './EmployeeList.css';

import Employee from './Employee/Employee';

const employeeList = (props) => {
    const employees = props.employees.map((employee, index) => {
        return (
            <Employee 
            key={employee.id}
            name={employee.name} 
            skill={employee.workskill} 
            salary={employee.salary}
            fired={props.fired}
            id={employee.id} />
        );
    });

    return (
        <div className={classes.EmployeeList} >
            {employees}
        </div>
    )
};

export default employeeList;