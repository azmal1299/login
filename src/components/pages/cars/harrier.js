import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faCab, faLuggageCart, faRoad, faGear, faCheck, faClose, } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import routes from "../../../routes";
import './singlecar.scss';
import Cars from "./cars";
// import car1 from '../cars';
// import Home from "../home/home";

function Harrier() {
  return (
    <dv>
      <div className="single-car">
        <Link to={"./Home"} className='ho-p'>home-page</Link>
        <Link to={"./Cars"} className='ho-p2'>back</Link>
        <div className="container">
          <div className="row">
          <div className="car-det">
            <img src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20190912023546_orcus_white_dt_1.png&w=700&q=90&c=1' alt='car1' />
            <div className="text"><span className="subheading">tata</span>
              <h2>harrier zx+</h2>
            </div>
            </div>
          </div>
          <div className="row">
            {/* <h5 className="text">car-details</h5> */}
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faDashboard} /></p>
                  <p>milage<br />
                    14kmpl
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faCab} /></p>
                  <p>seating-capacity<br />
                    5-seater
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faLuggageCart} /></p>
                  <p>Luggage-capacity<br />
                    425-litters
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faRoad} /></p>
                  <p>fuel capacity<br />
                    50-litters
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faGear} /></p>
                  <p>transmission<br />
                    6-gear(automatic)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="content">
                <div className="content-list">
                  <ul className="nav">
                    <li className="nav-list">features</li>
                    <li className="nav-list">discription</li>
                  </ul>
                </div>
                <div className="tab-content" id="pills">
                  <div className="tab-item">
                    <div className="row">
                      <div className="col">
                        <ul className="features">
                          <li><FontAwesomeIcon icon={faCheck}/>airconditioner</li>
                          <li><FontAwesomeIcon icon={faCheck}/>child-seat</li>
                          <li><FontAwesomeIcon icon={faCheck}/>GPS</li>
                          <li><FontAwesomeIcon icon={faCheck}/>Luggage</li>
                          <li><FontAwesomeIcon icon={faCheck}/>Music</li>
                          <li><FontAwesomeIcon icon={faCheck}/>seatbelt</li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="features">
                          <li><FontAwesomeIcon icon={faClose}/>Sleeping bed</li>
                          <li><FontAwesomeIcon icon={faCheck}/>bottle holder</li>
                          <li><FontAwesomeIcon icon={faCheck}/>blutooth</li>
                          <li><FontAwesomeIcon icon={faClose}/>onboard-computer</li>
                          <li><FontAwesomeIcon icon={faCheck}/>touch-display</li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="features">
                          <li><FontAwesomeIcon icon={faCheck}/>audio-input</li>
                          <li><FontAwesomeIcon icon={faCheck}/>USB</li>
                          <li><FontAwesomeIcon icon={faCheck}/>Mobile charger</li>
                          <li><FontAwesomeIcon icon={faCheck}/>car kit</li>
                          <li><FontAwesomeIcon icon={faCheck}/>remote key</li>
                          <li><FontAwesomeIcon icon={faCheck}/>climate control</li>
                          <li><FontAwesomeIcon icon={faCheck}/>child safety-lock</li>
                        </ul>
                      </div>
                    </div>
                  </div>  
                </div>
                <div className="discription">
                  <h3>discription</h3>
                  <p>
Tata Harrier is available in a manual and automatic diesel engine with a capacity of 1956cc, 4 cylinders. The key specification of Tata Harrier includes OMEGARC (Optimal Modular Efficient Global Advanced Architecture) derived from Land Rover’s D8 platform.
Tata Harrier specifications include dimensions - length of 4598 mm, the width of 1894 mm, the height of 1706 mm, and boot space is 425 l.
Tata Harrier is an SUV with 5 seater capacity and with a fuel capacity of 50 l. Check out the other technical specifications of Tata Harrier including suspension, transmission, brakes, and other specs. Also, explore Tata Harrier features to know about safety, design, interior, exterior, and more.
                  </p>
                </div>
                {/* <div className="booking"> */}
                  <Link to={"./booking"} className="book">book-here</Link>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </dv>
  )
}
export default Harrier;
