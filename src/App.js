import React, { Component } from 'react';

//import Layout from './components/Layout/Layout'
import Questionnaire from './containers/Questionnaire/Questionnaire'

import classes from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className={classes.container}>
        <Questionnaire />
      </div>
    );
  }
}

export default App;
