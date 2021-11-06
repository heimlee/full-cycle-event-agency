import React from 'react';

import { MainButtonSwitchLanguages } from './components/mainButtonSwitchLanguages/MainButtonSwitchLanguages';
import { MainLogo } from './components/mainLogo/MainLogo';
import { MainButtonQuestion } from './components/mainButtonQuestions/MainButtonQuestion';
import { MainFullCycle } from './components/mainFullCycle/MainFullCycle';

import './main.scss';

export const Main = () => {
  return(
    <main className="main-container">
      <header className="main-container__header">
        <MainButtonSwitchLanguages />
        <MainLogo />
      </header>
      <MainButtonQuestion title="Where?" className="question-where" />
      <section className="main-container__full-cycle-section">
        <MainFullCycle />
      </section>
      <MainButtonQuestion title="What?" className="question-what" />
      <footer className="main-container__footer">
        <MainButtonQuestion title="Who?" className="question-who" />
      </footer>
    </main>
  )
};
