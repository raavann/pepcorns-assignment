import React, {useState} from "react";

const Info = () => {

  const [currentElement, setCurrentElement] = useState('pitch');

  const handleClick = (element) => {
    setCurrentElement(element);
  }

  return (
    <div id='info'>


    <div className='buttons'>
      <button onClick={()=>handleClick('pitch')} className ={`btn card  ${currentElement==='pitch'?'active':''}`}> <i className="fa-solid fa-bag-shopping"></i> Pitch</button>
      <button onClick={()=>handleClick('details')} className ={`btn card ${currentElement==='details'?'active':''} `}> <i className="fa-solid fa-bag-shopping"></i> Details</button>
      <button onClick={()=>handleClick('updates')} className ={`btn card ${currentElement==='updates'?'active':''} `}> <i className="fa-solid fa-bag-shopping"></i> Updates</button>
      <button onClick={()=>handleClick('comments')} className ={`btn card ${currentElement==='comments'?'active':''} `}> <i className="fa-solid fa-bag-shopping"></i> Comments(0)</button>
    </div>
      <div className='content'>

        { currentElement==='pitch' && <div className="pitch card" >  
          <span className="f">
            DECK
            <button onClick={() => window.open("https://api.pepcorns.com/clientassets/icon1651230174497.pdf", '_blank')} className="risebtn">DOWNLOAD PITCH DECK</button>
          </span>
          <hr></hr>
          
          <span>
            <h4>10 Seconds Pitch</h4>
            <p>Online search, compare & booking platform for self-drive cars, charter flights, living space & more that rewards users</p>
          </span>
          <hr></hr>

          <span>
            <h4>Deck Info</h4>
            <h1>LetzRent</h1>
          </span>
          <hr></hr>

          <span>
            <h4>Highlights</h4>
            <ul>
              <li>Running profitable pilot in Bengaluru.</li>
              <li>20k+ registered users, 4.2 app rating and 10k+ social media following  </li>
              <li>Company is projecting 100cr+ transaction volume in 5 years</li>
              <li>Founder with the marketing expertise of 17+ years in Reliance, Naaptol, Tv9 and Zee and more.</li>
              <li>GenZ CTO and co-founder.</li>
              <li>Expansion is easy and the untapped customer base is huge.</li>
              <li>Been in news articles, already making buzz.</li>
            </ul>
          </span>
          <hr></hr>

          <span>
            <h4>Traction</h4>
            <img src="https://images.unlayer.com/projects/15608/1651352968445-10.PNG" alt="some"></img>
          </span>
          <hr></hr>

          <span>
            <h4>Smarter Way To Rent</h4>
            <img src="https://images.unlayer.com/projects/15608/1651352942115-6.png" alt="some"></img>
          </span>
          <hr></hr>

          <span>
            <h4>Customers Want Low Prices</h4>
            <p>
              To get low prices 85% of the consumers check at least 2 data points (Source: BCG Consumer Trends). In various sectors information centred buying has been made more efficient by companies like MMT for Travel, Policy bazaar for Insurance, Myntra or Shopperstop for Lifestyle products. However for rental products, there is no one & to fill this need and make the process efficient we launched LetzRent, hoping to have a first-mover advantage and dominate the market in the coming future.
            </p>
            <img src="https://images.unlayer.com/projects/15608/1651352925215-3.PNG" alt="some"></img>
          </span>
          <hr></hr>

          <span>
            <h4>Single KYC</h4>
            <p>
            Renting is a KYC dependent process, every time a customer books a service from a different service provider he/she will have to get a new KYC done. With Letzrent, the hassle of multiple KYC gets removed and with a single KYC, customers can rent from multiple brands.
            </p>
          </span>
          <hr></hr>

          <span>
            <h4>Vast Selection</h4>
            <p>
              Being an aggregator Letzrent offers more options than category leaders.
            </p>
            <img src="https://images.unlayer.com/projects/15608/1651352918059-2.png" alt="some"></img>
          </span>
          <hr></hr>

          <span>
            <h4>Why Renting? </h4>
              <ol>
                <li>Demographic Twist: Commitment phobic millennials prefer an asset lite life with a bias toward renting rather than buying.</li>

                <li>Flexibility: Renting allows people to upgrade or change assets easily.</li>

                <li>Convenience: With the rental customers dispense with the headache of down payment, maintenance, insurance etc.</li>
              </ol>
            <img src="https://images.unlayer.com/projects/15608/1651352954073-8.png" alt="some"></img>
          </span>
          <hr></hr>

          <span>
            <h4>Market Size</h4>
            <img src="https://images.unlayer.com/projects/15608/1651352961142-9.png" alt="some"></img>
          </span>
          <hr></hr>


          <span>
            <h4>Competitors</h4>
            <img src="https://images.unlayer.com/projects/15608/1651352937596-5.PNG" alt="some"></img>
          </span>
          <hr></hr>


          <span>
            <h4>Feedback: People love us</h4>
            <img src="https://images.unlayer.com/projects/15608/1651352929580-4.PNG" alt="some"></img>
          </span>
          <hr></hr>

          <span>
            <img src="https://images.unlayer.com/projects/15608/1651352949305-7.png" alt="some"></img>
          </span>
          <hr></hr>

          <span>
            <img src="https://images.unlayer.com/projects/15608/1651352986615-11.png" alt="some"></img>
          </span>
          <hr></hr>
          
          <span>
            <h4>Documents for Investors</h4>
            <ul>
              <li><a href="http://drive.google.com/file/d/1clHQGD__nkbsA-cLz3A6_tABUuk5rl3w/view">Due Diligence Report</a></li>
              <li><a href="http://drive.google.com/file/d/1i02nUH-27EhiROtNlvXOfkPP7iTfwjpw/view?usp=sharing">Certificate of Incorporation</a></li>
            </ul>
          </span>
          <hr></hr>





        </div>}



        { currentElement==='details' &&<div className="details">  
          <div> <b>Meet our strong</b> and visionary team members</div>
          <div className="profiles">
            <span className="card prof">
              <img src="https://api.pepcorns.com/clientassets/icon1651231237314.jpg" alt="some"></img>
              <h3 className="Name">Manish Pratik</h3>
              <p> CoFounder</p>
              <span className="links">
                <a className="risebtn twitter" href="https://twitter.com/manishpratik"> <i className="fab fa-twitter fa-lg"></i></a> 
                <a className="risebtn facebook"> <i className="fab fa-facebook fa-lg"></i></a> 
                <a className="risebtn linkedin" href="https://www.linkedin.com/in/manishpratik/"> <i className="fab fa-linkedin fa-lg"></i></a> 
              </span>
            </span>

            <span className="card prof">
              <img src="https://api.pepcorns.com/clientassets/icon1651243119561.jpg" alt="some"></img>
              <h3 className="Name">Gautam Menon</h3>
              <p> CoFounder</p>
              <span className="links">
                <a className="risebtn twitter" > <i className="fab fa-twitter fa-lg"></i></a> 
                <a className="risebtn facebook"> <i className="fab fa-facebook fa-lg"></i></a> 
                <a className="risebtn linkedin" href="https://www.linkedin.com/in/gautam-menon-040379208"> <i className="fab fa-linkedin fa-lg"></i></a> 
              </span>
            </span>
          </div>
          
          <div className="funds card"> <div className="fi">How will we use funds : Sales & Marketing - 50% | Human Resource-30% | Technology -10% | OPEX-10%</div></div>
          
          <div className="txt2"> 
            <div className="txt2-1 card">
              <span>
                <h3>START DATE</h3>
                <h1>2022-06-26 16:38:05</h1>
                <span id = 'green'> <i className="fa fa-arrow-up"></i> Ends in </span>0 Days
              </span>

              <span id="icon8">
                <i className="fa-solid fa-hand fa-lg"></i>
              </span>
            </div>
            

            <div className="txt2-1 card">
              <span>
                <h3>TARGET RAISE</h3>
                <h1>5000000</h1>
                <span id = 'green'> <i className="fa fa-arrow-up "></i>  0% </span>Raised So far
              </span>
              <span id="icon82">
                <i className="fa-solid fa-chart-pie fa-lg"></i>
              </span>            
            </div>
          </div>

          <div className="card faq">
            <h1>Frequently Asked Question [Found 3]</h1>

            <span>
              <h4>What does your company do ?</h4>
              <p>LetzRent is an online search, compare & booking platform for self-drive car rental that rewards users for renting. We aggregate rental deals from multiple service providers and present them to users with prices, reviews & facts to make an informed decision. Currently running a pilot in Bangalore by aggregating Zoomcar, Avis, Mychoize & Wowcarz.</p>
            </span>

            <span>
              <h4>Where do you want to be in 5 years ?</h4>
              <p>Uber for Self Drive Car Rental</p>
            </span>

            <span>
              <h4>Why did you choose this idea, what's your biggest Obstacle?</h4>
              <p>Customers want low Prices: And to get low prices 85% of the consumers check at least 2 data points (Source: BCG Consumer Trends). In various sectors information-centred buying has been made more efficient by companies like MMT for Travel, Policy bazaar for Insurance, Myntra or Shopperstop for Lifestyle products. However, for rental products, there is no one & to fill this need and make the process efficient we launched Letzrent, hoping to have a first-mover advantage and dominate the market in t</p>
            </span>

          </div>

        </div>}

        { currentElement==='updates' &&<div className="Updates"> 
          <div className="card" id="sec3">
          </div>
        </div>}

        { currentElement==='comments' &&<div className="Comments">
          <div className = 'nocomments'>
            <span className="fullwd">Not Comments found! Add one</span>
            <button className="m">Add Comment</button>
            <div className="card arrow"> 
              <a >
                <i className="fas fa-angle-right"></i>
                <span className="sr-only">Next</span>
              </a>            
              <a>
                <i className="fas fa-angle-left"></i>
                <span className="sr-only">Previous</span>
              </a>


            </div>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Info;