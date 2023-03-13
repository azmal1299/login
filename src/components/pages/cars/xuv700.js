import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faCab, faLuggageCart, faRoad, faGear, faCheck, faCross, faClose, } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import routes from "../../../routes";
import './singlecar.scss';
// import car1 from '../cars';
// import Home from "../home/home";

function Xuv700() {
  return (
    <dv>
      <div className="single-car">
        <Link to={"./Home"} className='ho-p'>home-page</Link>
        <Link to={"./Cars"} className='ho-p2'>back</Link>
        <div className="container">
          <div className="row">
          <div className="car-det">
            <img src='https://img.autotrader.co.za/21359912' alt="car8" />
            <div className="text"><span className="subheading">mahindra</span>
              <h2>XUV-700</h2>
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
                    11 to 14-kmpl
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faCab} /></p>
                  <p>seating-capacity<br />
                    5/7-seater
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faLuggageCart} /></p>
                  <p>Luggage-capacity<br />
                    85-litters
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faRoad} /></p>
                  <p>fuel capacity<br />
                    70-litters
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faGear} /></p>
                  <p>transmission<br />
                    7 speed-gear(automatic)
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
                  The Mahindra XUV700 has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel
                   engine is 2198 cc while the Petrol engine is 1999 cc . It is available with 
                   Automatic & Manual transmission.Depending upon the variant and fuel type the
                    XUV700 has a mileage of . The XUV700 is a 7 seater 4 cylinder car and has length
                     of 4695mm, width of 1890mm and a wheelbase of 2750mm.
                  </p>
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
export default Xuv700;
