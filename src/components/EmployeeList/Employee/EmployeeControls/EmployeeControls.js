import React from 'react';

import Button from '../../../UI/Button/Button';

const employeeControls = (props) => {
    return (
        <div>
            <Button btnType="Success" >Give Raise</Button>
            <Button btnType="Danger" onClick={props.fired} >Fire</Button>
        </div>
    );
}

export default employeeControls;