import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faCab, faLuggageCart, faRoad, faGear, faCheck, faCross, faClose, } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import routes from "../../../routes";
import './singlecar.scss';
// import car1 from '../cars';
// import Home from "../home/home";

function Fortuner() {
  return (
    <dv>
      <div className="single-car">
        <Link to={"./Home"} className='ho-p'>home-page</Link>
        <Link to={"./Cars"} className='ho-p2'>back</Link>
        <div className="container">
          <div className="row">
            <div className="car-det">
              <img src='https://img.indianautosblog.com/2020/06/04/toyota-fortuner-legender-red-black-front-quarters-273f.jpg' alt="2" />
              <div className="text"><span className="subheading">toyota</span>
                <h2>fortuner lagender-(4x4)</h2>
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
                    08-kmpl
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faCab} /></p>
                  <p>seating-capacity<br />
                    7-seater
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faLuggageCart} /></p>
                  <p>Luggage-capacity<br />
                    75-litters
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
                    7-gear(automatic)
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
                          <li><FontAwesomeIcon icon={faCheck} />airconditioner</li>
                          <li><FontAwesomeIcon icon={faCheck} />child-seat</li>
                          <li><FontAwesomeIcon icon={faCheck} />GPS</li>
                          <li><FontAwesomeIcon icon={faCheck} />Luggage</li>
                          <li><FontAwesomeIcon icon={faCheck} />Music</li>
                          <li><FontAwesomeIcon icon={faCheck} />seatbelt</li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="features">
                          <li><FontAwesomeIcon icon={faClose} />Sleeping bed</li>
                          <li><FontAwesomeIcon icon={faCheck} />bottle holder</li>
                          <li><FontAwesomeIcon icon={faCheck} />blutooth,USB</li>
                          <li><FontAwesomeIcon icon={faClose} />onboard-computer</li>
                          <li><FontAwesomeIcon icon={faCheck} />touch-display</li>
                          <li><FontAwesomeIcon icon={faCheck} />remote key</li>

                        </ul>
                      </div>
                      <div className="col">
                        <ul className="features">
                          <li><FontAwesomeIcon icon={faCheck} />traction control</li>
                          <li><FontAwesomeIcon icon={faCheck} />hilldescent control</li>
                          <li><FontAwesomeIcon icon={faCheck} />wireless Mobile-charger</li>
                          <li><FontAwesomeIcon icon={faCheck} />alloy wheel</li>
                          <li><FontAwesomeIcon icon={faCheck} />four wheel-drive</li>
                          <li><FontAwesomeIcon icon={faCheck} />climate control</li>
                          <li><FontAwesomeIcon icon={faCheck} />child safety-lock</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="discription">
                  <h3>discription</h3>
                  <p>
                    Tata Toyota Fortuner Legender 4X4 AT 2.8 Legender is the top model in the Toyota Fortuner Legender lineup and the
                    price of Fortuner Legender top model is ₹ 46.54 Lakh.It returns a certified mileage of 14.2 kmpl. This 4X4 AT 2.8
                    Legender variant is the Toyota Fortuner Legender top model and comes with an engine putting out 201 bhp @ 3000 rpm
                    and 500 Nm @ 1600 rpm of max power and max torque respectively. Toyota Fortuner Legender 4X4 AT 2.8 Legender is available
                    in Automatic (TC) transmission and offered in a colour: White Pearl Crystal Shine with Black Roof.

                  </p>
                </div>
                <Link to={"./home1"} className="book">book-here</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dv>
  )
}
export default Fortuner;
