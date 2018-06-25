import React from 'react';

const questionCounter = ( props ) => {
  return (
    <div>
      {props.currentQuestion+ '/' +props.totalQuestions}
    </div>
  );
};

export default questionCounter;