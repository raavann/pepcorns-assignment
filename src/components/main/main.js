import React from 'react';
import './main.css';
import Video from './video';
import Deals from './deals';
import Info from './info';
import Invest from './invest';
const Main = () => {
  return (
    <>
      <Video />

      <Invest/>

      <Info/>

      <Deals/>

    </>
  );
}

export default Main;