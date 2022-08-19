// import React  from "react"
const Wrapper = (props) => {
    return (
        <div className="wrapper card">
            <span className="heading">₹ {props.heading} <br></br><span className="txt">Invest</span></span>
            
            <div className="text2abv">
            <span className="txt2"><i class="fas fa-terminal"></i>{props.trm}</span>
            <span className="txt2"><i class="fas fa-pen-fancy"></i>TNC: {props.tnc}</span>
            </div>
            <button className=".risebtn primary">Invest</button>
        </div>
    );
};

export default Wrapper;