import React from 'react';
import './main.css';
import Video from './video';
import Deals from './deals';
import Info from './info';
import Invest from './invest';
const Main = () => {
  return (
    <div className='main'>
      <Video />

      <Invest/>

      <Info/>

      <Deals/>

    </div>
  );
}

export default Main;