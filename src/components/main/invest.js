import React  from "react";

const Invest = () => {
    return (
        <div className='invest card'>
          <span className="up">
            <h1>₹ 0</h1>
            <p>0 % of minimum goal raised</p>
          </span>
          <hr></hr>

          <span className="mid">
            <h1>0</h1>
            <p className="sect">Total Investors</p>
            <hr></hr>
            <h1>0 Days</h1>
            <p className="sect">Left to Invest</p>
          </span>

          <span className="lastbtn">
            <button className = 'risebtn llbtn'><i className="fa-solid fa-coins"></i> Campaign Expired</button>
            <p >₹ 1000 Minimum Investment</p>
          </span>
      </div>
    );
};

export default Invest;