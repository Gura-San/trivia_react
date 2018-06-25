import React from 'react';

import classes from './QuestionScreen.css'

const questionScreen = ( props ) => {
  return (
    <div className={classes.q_field}>
      <b>{props.question}</b>
    </div>
  );
};

export default questionScreen;