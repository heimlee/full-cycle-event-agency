import React from 'react';

import { MainButtonSwitchLanguages } from './components/mainButtonSwitchLanguages/MainButtonSwitchLanguages';
import { MainLogo } from './components/mainLogo/MainLogo';
import { MainButtonQuestion } from './components/mainButtonQuestions/MainButtonQuestion';

import './main.scss';

export const Main = () => {
  return(
    <main className="main-container">
      <header className="main-container__header">
        <MainButtonSwitchLanguages />
        <MainLogo />
      </header>
      <MainButtonQuestion title="Where?" className="question-where" />
      <h1>Full-Cycle Event Agency</h1>
      <MainButtonQuestion title="What?" className="question-what" />
      <footer className="main-container__footer">
        <MainButtonQuestion title="Who?" className="question-who" />
      </footer>
    </main>
  )
};
