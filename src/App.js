import React, { Component } from 'react';
import classes from './App.css';

import Layout from './hoc/Layout/Layout';
import Game from './containers/Game/Game';

class App extends Component {
  
  render() {
    return (
      <div className={classes.App} >
        <Layout>
          <Game /> 
        </Layout>
      </div>
    );
  }
}

export default App;