import React from 'react';

import { MainButtonSwitchLanguages } from './components/mainButtonSwitchLanguages/MainButtonSwitchLanguages';
import { MainLogo } from './components/mainLogo/MainLogo';

import './main.scss';

export const Main = () => {
  return(
    <main className="main-container">
      <header className="main-container__header">
        <MainButtonSwitchLanguages />
        <MainLogo />
      </header>
      <h1>Full-Cycle Event Agency</h1>
    </main>
  )
};
