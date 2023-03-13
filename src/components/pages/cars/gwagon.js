import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faCab, faLuggageCart, faRoad, faGear, faCheck, faCross, faClose, } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import routes from "../../../routes";
import './singlecar.scss';
// import car1 from '../cars';
// import Home from "../home/home";

function Gwagon() {
  return (
    <dv>
      <div className="single-car">
        <Link to={"./Home"} className='ho-p'>home-page</Link>
        <Link to={"./Cars"} className='ho-p2'>back</Link>
        <div className="container">
          <div className="row">
          <div className="car-det">
            <img src='https://freepngimg.com/thumb/mercedes/72-black-mercedes-g-class-gelandewagen-car-png-image.png' alt="car9" />
            <div className="text"><span className="subheading">mercedes</span>
              <h2>G-wagon</h2>
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
                    06-kmpl
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
                    335-litters
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faRoad} /></p>
                  <p>fuel capacity<br />
                    95-litters
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faGear} /></p>
                  <p>transmission<br />
                    9 speed-gear(automatic)
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
                          <li><FontAwesomeIcon icon={faCheck}/>blutooth,USB</li>
                          <li><FontAwesomeIcon icon={faClose}/>onboard-computer</li>
                          <li><FontAwesomeIcon icon={faCheck}/>touch-display</li>
                          <li><FontAwesomeIcon icon={faCheck}/>remote key</li>
                          {/* <li><FontAwesomeIcon icon={faCheck}/>ADOS-feature</li> */}
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="features">
                          <li><FontAwesomeIcon icon={faCheck}/>traction control</li>
                          <li><FontAwesomeIcon icon={faCheck}/>hilldescent control</li>
                          <li><FontAwesomeIcon icon={faCheck}/>wireless Mobile-charger</li>
                          <li><FontAwesomeIcon icon={faCheck}/>alloy wheel</li>
                          {/* <li><FontAwesomeIcon icon={faCheck}/>four wheel-drive</li> */}
                          <li><FontAwesomeIcon icon={faCheck}/>panaromic moon-roof</li>
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
                  The Mercedes-Benz G-Class has 1 Diesel Engine on offer. The Diesel engine is 
                  2925 cc . It is available with Automatic transmission.Depending upon the variant 
                  and fuel type the G-Class has a mileage of 8.13 kmpl & Ground clearance of G-Class 
                  is 241 mm. The G-Class is a 5 seater 6 cylinder car and has length of 4606 mm, 
                  width of 1976 mm and a wheelbase of 2850mm..</p>
                </div>
                <Link to={"./booking"} className="book">book-here</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dv>
  )
}
export default Gwagon;
