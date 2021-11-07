import React from 'react';

import { MainTickerText } from './components/mainTickerText/MainTickerText';
import { MainButtonSwitchLanguages } from './components/mainButtonSwitchLanguages/MainButtonSwitchLanguages';
import { MainLogo } from './components/mainLogo/MainLogo';
import { MainButtonQuestion } from './components/mainButtonQuestions/MainButtonQuestion';
import { MainFullCycle } from './components/mainFullCycle/MainFullCycle';
import { MainTitle } from './components/mainTitle/MainTitle';

import './main.scss';

export const Main = () => {
  return(
    <main className="main-container">
      <MainTickerText />
      <header className="main-container__header">
        <MainButtonSwitchLanguages />
        <MainLogo />
      </header>
      <div className="main-container__sidebar-left">
        <MainButtonQuestion title="Where?" className="question-where" />
      </div>
      <section className="main-container__full-cycle-section">
        <MainFullCycle />
        <MainTitle />
      </section>
      <div className="main-container__sidebar-right">
        <MainButtonQuestion title="What?" className="question-what" />
      </div>
      <footer className="main-container__footer">
        <MainButtonQuestion title="Who?" className="question-who" />
      </footer>
    </main>
  )
};
