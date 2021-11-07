import React from 'react';

import './mainButtonSwitchLanguages.scss';

export const MainButtonSwitchLanguages = () => {
  function handleSwitchLanguages(e) {
    const rowIconLanguages = document.getElementsByClassName('row-icon-languages')[0];
    rowIconLanguages.classList.toggle('active');
  }

  return(
    <>
      <div onClick={handleSwitchLanguages} className="button-switch-languages">
        <div className="eclipse-languages"></div>
        <div className="icon-languages">👅</div>
      </div>
      <div onClick={handleSwitchLanguages} className="row-icon-languages">
        <div className="row-icon-languages__box">
          <div className="row-icon-languages__box-element">en</div>
          <div className="row-icon-languages__box-element">ua</div>
          <div className="row-icon-languages__box-element">ru</div>
        </div>
      </div>
    </>
  );
};
