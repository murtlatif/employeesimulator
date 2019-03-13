import React, { Component } from 'react';
import classes from './Game.css';

import EmployeeList from '../../components/EmployeeList/EmployeeList';
import Stats from '../../components/Stats/Stats';

class Game extends Component {

    state = {
        employees: [
            {id: 0, name: 'John Doe', workskill: 0, salary: 11.40},
            {id: 1, name: 'Pepak Lati', workskill: 3, salary: 11.40},
            {id: 2, name: 'Liad Cingcing', workskill: 1, salary: 11.40},
            {id: 3, name: 'Larg DeFat', workskill: 2, salary: 11.40},
        ],
        money: 1029,
    }
    
    fireEmployeeHandler = (employeeId) => {
        let currentEmployees = [...this.state.employees]
        const deleteAtIndex = currentEmployees.findIndex((employee) => employee.id === employeeId);
        currentEmployees.splice(deleteAtIndex, 1);
        this.setState({employees: currentEmployees});
        return true;
    }

    render() {
        return (
            <div className={classes.Game} >
                <EmployeeList 
                    employees={this.state.employees} 
                    fired={this.fireEmployeeHandler} />
                <Stats 
                    money={this.state.money}
                    numEmployees={this.state.employees.length} />
            </div>
        );
    };

};

export default Game;