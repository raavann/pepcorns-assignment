import React from 'react';
import './header.css';
import Popup from 'reactjs-popup';

const Header = () => {
  return (
    <div id='header'>
      <h5 className='headerText'>
          - Dashboard
      </h5>
      <div className='UserImage'>
        <Popup
          trigger={
            <img src='https://app.pepcorns.com/assets/img/dealer_reg.svg' alt='User' />
          }
          nested
        >
          {close => (
            <div className="logoutmodal card">
              <div className="header"> WELCOME! </div>
              <span className='line'></span>
              <div className="content">
                {' '}
                <a href="https://app.pepcorns.com/#!/login">
                  <i className="fa-solid fa-person-running"></i>
                  <span> Logout</span>
                </a>
                
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
}

export default Header;