import React from 'react';
import Popup from 'reactjs-popup';
import './modal.css';

export default (props) => (
  <Popup
    trigger={<button className={props.classname}> {props.btntitle}</button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <div className="header">{props.modaltitle} </div>
        <div className="content">
          {' '}
            {props.content}
        </div>

      </div>
    )}
  </Popup>
);