import React from 'react';

import './mainCircleShowreel.scss';

export const MainCircleShowreel = () => {
  const text = 'showreel showreel showreel';
  
  function charText() {
    return text.split("").map((char, i) => <span key={i} style={{"transform": `rotate(${i*13}deg)`}} >{char}</span>);
  }

  return(
    <div className="circle-showreel-container">
      <div className="circle-showreel-dot"></div>
      <div className="circle-showreel-text">
        {charText()}
      </div>
    </div>
  )
};
