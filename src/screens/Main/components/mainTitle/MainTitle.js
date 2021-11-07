import React from 'react';

import './mainTitle.scss';

export const MainTitle = () => {
function handleMouseMove(e) {
  const x = (window.innerWidth - e.pageX*2)/100;
  const y = (window.innerHeight - e.pageY*2)/100;

  e.currentTarget.children[0].style.transform = `translate(${x}px, ${y}px)`;
}

  return(
    <div className="field" onMouseMove={handleMouseMove}>
      <h1 className="main-title" >Full-Cycle <br/> Event Agency</h1>
    </div>
  );
};
