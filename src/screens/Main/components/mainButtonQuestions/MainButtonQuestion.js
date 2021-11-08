import React from 'react';

import './mainButtonQuestion.scss';

export const MainButtonQuestion = (props) => {
  return(
    <div className={`main-button-question ${props.className}`}>{props.title}</div>
  );
};
