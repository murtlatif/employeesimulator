import React, { Component } from 'react';
import './App.css';
import Employee from './Employee/Employee';

class App extends Component {
  state = {
    employees: [],
    applicants: [
      {id: 1, name: 'Pepak', workethic: 'Good'},
      {id: 2, name: 'Liad', workethic: 'Abusive'},
      {id: 3, name: 'Omerrr', workethic: 'SRS WET'},
      {id: 4, name: 'Aboo', workethic: 'Fairly moody'},
      {id: 5, name: 'Sahil', workethic: 'PAIN'}
    ],
  };
  
  hireEmployeeHandler = () => {
    let applicants = [...this.state.applicants];
    let employees = [...this.state.employees];
    
    if (applicants.length > 0) {
      // Select a random applicant
      const newEmployeeIndex = Math.floor(Math.random() * applicants.length);
      const newEmployee = applicants[newEmployeeIndex];
      
      // Remove the applicant from the potential applicants list
      applicants.splice(newEmployeeIndex, 1);
      employees.push(newEmployee);
      
      this.setState({employees: employees, applicants: applicants});
    }
  };

  render() {
    const employeeList = this.state.employees.map((employee, i)  => {
      return (
        <Employee 
        key={employee.id} 
        name={employee.name} 
        workethic={employee.workethic} />
      );
    });
    
    return (
      <div className="App">
        <p>This is pepak's app!</p>
        <h1>Employees</h1>
        <button onClick={this.hireEmployeeHandler}>Hire employee</button>
        <div className="employees">
          {employeeList}
        </div>
      </div>
    );
  }
}

export default App;
