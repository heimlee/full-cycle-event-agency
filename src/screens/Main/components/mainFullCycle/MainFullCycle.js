import React from 'react';

import { MainCircleShowreel } from '../mainCircleShowreel/MainCircleShowreel';

import './mainFullCycle.scss';

export const MainFullCycle = () => {
  return(
    <div className="cycle">
      <div className="inner-circle"></div>
      <MainCircleShowreel />
    </div>
  );
};
