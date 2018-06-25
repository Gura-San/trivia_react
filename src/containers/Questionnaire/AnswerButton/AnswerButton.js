import React from 'react';

import classes from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const answerButton = ( props ) => {
  let answers = props.answers
  return (
    answers.map((answer, index) => {
      return (
        <button type="button" 
          className={classes.btn+ ' ' +classes['btn-secondary']} 
          key={index}
          value={answer}
          onClick={e => props.clicked(e)}>
            {answer}
        </button>
      )
    })
  )
}

export default answerButton;