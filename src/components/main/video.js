import React  from "react";

const Video = () => {
    return (
        <div id='video'>
            <a className="upper" href='https://www.youtube.com/watch?v=biGcDeB2PbQ'>Unable to view video ? Click here</a>
            
            <div className='video-footer card'>
                <div className="vid video-container">
                    <iframe width="500px" height="400px" src="https://www.youtube.com/embed/biGcDeB2PbQ" title="LetzRent for Pepcorns | Making renting simple, affordable and rewarding." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <div className='details'>
                    <p>
                        <a target="_blank" className="text-primary" href="https://www.instagram.com/letzrent.official/">
                            <i className="fas fa-map-marker-alt"></i> <span className="links"> Mumbai,Maharashtra</span> 
                        </a>
                    </p>

                    <p>
                        <a target="_blank" className="text-primary" ng-href="https://letzrent.com" href="https://letzrent.com">
                            <i className="fab fa-chrome"></i> <span className="links"> https://letzrent.com</span> 
                        </a>
                    </p>

                    <div className='icons'>
                        <a target="_blank" className="text-warning" href="https://www.instagram.com/letzrent.official/">
                        <span><i className="fab fa-instagram"></i></span>
                        </a>
                        <a target="_blank" className="text-primary" href="https://www.facebook.com/LetzRent.official/">
                        <span><i className="fab fa-facebook"></i></span>
                        </a>
                        <a target="_blank" className="text-danger" href="https://www.youtube.com/watch?v=biGcDeB2PbQ">
                        <span><i className="fab fa-youtube"></i></span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Video;