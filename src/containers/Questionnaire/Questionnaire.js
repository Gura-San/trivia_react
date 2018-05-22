import React, { Component } from 'react';
import axios from 'axios'

import Aux from '../../hoc/Auxiliary'

class Questionnaire extends Component {
  URL = 'https://opentdb.com/api.php?amount=10'
  componentDidMount() {
    axios.get(this.URL)
      .then(res => {
        console.log(res)
      })
  }

  render() {
    return (
      <Aux>
        <p>QuestionDisplay</p>
        <p>AnswerButtons</p>
      </Aux>
    );
  }
}

export default Questionnaire;