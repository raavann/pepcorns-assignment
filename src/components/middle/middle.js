import React from 'react';
import './middle.css';

const Middle = () => {
  return (
    <div className = 'middlemain'>
      <div className = 'buttons'>
        <button>Dashboard</button>
        <a href='https://app.pepcorns.com/#!/login'><button className='risebtn midbtn'>Login Now</button></a>
        <a href='https://app.pepcorns.com/#!/login'><button className='risebtn midbtn'>Back to Website</button></a>
      </div>

      <div className='maintitle'>
        <div className='img'>
          <img src='https://api.pepcorns.com/clientassets/icon1651230435196.png' alt='logo' />
        </div>

        <div className='content'>
          <h1>Letzrent</h1>
          <a href='https://www.instagram.com/letzrent.official/'><p className='adrs'>Address : Mumbai Maharashtra</p></a>
          <p className='email'><span className='online'>●</span> EMAIL : | Website : https://letzrent.com | PAN/TAN : AAJCR3294F</p>
          <p className='other'>Online search, compare & booking platform for self-drive cars, charter flights, living space & more that rewards users</p>
        </div>

        <div className='links'>
          <a><i className="fa-solid fa-user-plus"></i> Follow <br/></a>
          <a><i className="fa-solid fa-share"></i> Share</a>
        </div>
      </div>
      
      <div className='bottomtext'>  
        <p className='org'>GEN Z FOUNDER</p>
        <p>MOBILITY</p>
        <p>E-COMMERCE</p>
      </div>

    </div>
  );
}

export default Middle