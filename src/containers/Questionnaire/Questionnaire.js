import React, { Component } from 'react';
import axios from 'axios'
import classes from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Aux from '../../hoc/Auxiliary'
import QuestionScreen from './QuestionScreen/QuestionScreen'
import AnswerButton from './AnswerButton/AnswerButton'

class Questionnaire extends Component {
  state = {
    currentQuestion:  null,
    questionnaire:    {},
    questionCount:    null,
    score:            null,
    totalScore:       null,
    rightAnswers:     null,
    //===Error Handling===//
    loading:          true,
    error:            ''
  }

  loadData = () => {
    axios.get('https://opentdb.com/api.php?amount=10')
    .then(res => {
      let data = res.data.results.map(data => {
        let question = this.stringParser(data.question)
        return {
          category:       data.category,
          difficulty:     data.difficulty,
          question:       question,
          all_answers:    [...data.incorrect_answers, data.correct_answer],
          correct_answer: data.correct_answer,
          type:           data.type
        }
      })
      this.setState({
        currentQuestion:  0,
        questionnaire:    data,
        questionCount:    data.length,
        score:            0,
        totalScore:       0,
        rightAnswers:     0,
        loading:          false,
        error:            false
      })
    })
    .catch(error => {
      console.log('error: ', error);
      this.setState({
        error: `${error}`,
        loading: false
      })
    })
  }

  stringParser = (str) => {
    return str = str.replace(/&quot;/g,'"').replace(/&#039;/g,'\'')
  }
  
  componentDidMount() {
    this.loadData()
  }

  answerCheck = (e) => {
    let corAnswer = this.state.questionnaire[this.state.currentQuestion].correct_answer
    let answer = e.target.value
    if (answer === corAnswer) {
      console.log("i'm in true");
      this.setState(prevState => ({
        score:            prevState.score + 10,
        totalScore:       prevState.totalScore + this.state.score,
        rightAnswers:     prevState.rightAnswers + 1,
        currentQuestion:  prevState.currentQuestion + 1
      }))
      } else {
        console.log("i'm in false");
        this.setState(prevState => ({
          currentQuestion:  prevState.currentQuestion + 1
        }))
      }
  }

  errorHandler = () => {
    const { questionnaire, questionCount, currentQuestion, loading, error } = this.state
    
    if (loading) {
      return <div>Loading ...</div>
    }
    if (error) {
      return <div>The was an error loading the data</div>
    }
    return (
      <div className={classes['col-md-6']}>
        <QuestionScreen 
          question={ questionnaire[currentQuestion].question } />
        <AnswerButton 
          answers={ questionnaire[currentQuestion].all_answers }
          clicked={ this.answerCheck } />
      </div>
    );
  }

  render() {
    return(
      <div className={classes.row}>
        {this.errorHandler()}
      </div>
    )
  }
}

export default Questionnaire;