import React, { Component } from 'react';

import Layout from './components/Layout/Layout'
import Questionnaire from './containers/Questionnaire/Questionnaire'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Questionnaire />
        </Layout>
      </div>
    );
  }
}

export default App;
