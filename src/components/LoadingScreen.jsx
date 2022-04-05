import React from 'react';

function LoadingScreen() {
  return (
    <div className="loader">
      <img src={'images/notion_logo.png'} alt="logo" />
      <div className="line">
        <div className="inner"></div>
      </div>
    </div>   
  )
}

export default LoadingScreen;