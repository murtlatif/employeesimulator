import React, { Fragment } from 'react';
import classes from './Layout.css';


const layout = (props) => {
    return (
        <Fragment>
            <div className={classes.Header} >Header, Background</div>
            <main className={classes.Background} >
                {props.children}
            </main>
        </Fragment>
    );
};

export default layout;