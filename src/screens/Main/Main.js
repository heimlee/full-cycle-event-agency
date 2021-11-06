import React from 'react';

import { MainLogo } from './components/mainLogo/MainLogo';

import './main.scss';

export const Main = () => {
  return(
    <main className="main-container">
      <header className="main-container__header">
        <MainLogo />
      </header>
      <h1>Full-Cycle Event Agency</h1>
    </main>
  )
};
