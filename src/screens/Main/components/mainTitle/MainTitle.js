import React from 'react';
import { useMousePosition } from '../useMousePosition/useMousePosition';

import './mainTitle.scss';

export const MainTitle = () => {
  const position = useMousePosition();

  document.addEventListener("mousemove", handleMouseMove);

  function handleMouseMove(e) {
    const x = (window.innerWidth - position.x*2)/100;
    const y = (window.innerHeight - position.y*2)/100;
    const mainTitle = document.getElementsByClassName('main-title')[0];
    mainTitle.style.transform = `translate(${x}px, ${y}px)`;
  }

  return(
    <h1 className="main-title">Full-Cycle <br/> Event Agency</h1>
  );
};
