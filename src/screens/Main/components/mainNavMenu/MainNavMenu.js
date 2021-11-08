import React from 'react';

import { MainButtonQuestion } from '../mainButtonQuestions/MainButtonQuestion';

import './mainNavMenu.scss';

export const MainNavMenu = () => {
  function handleNavMenu(e) {
    const navSidebar = document.getElementsByClassName('nav-sidebar')[0];
    e.currentTarget.classList.toggle('active-nav-menu');
    navSidebar.classList.toggle('active-nav-sidebar');
  }
  return(
    <>
      <div onClick={handleNavMenu} className="nav-menu"></div>
      <div className="nav-sidebar">
        <MainButtonQuestion title="What?" className="menu-color" />
        <MainButtonQuestion title="Who?" className="menu-color" />
        <MainButtonQuestion title="Where?" className="menu-color" />
      </div>
    </>
  );
};
