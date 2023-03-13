import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faCab, faLuggageCart, faRoad, faGear, faCheck, faCross, faClose, } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import routes from "../../../routes";
import './singlecar.scss';
// import car1 from '../cars';
// import Home from "../home/home";

function Amg() {
  return (
    <dv>
      <div className="single-car">
        <Link to={"./Home"} className='ho-p'>home-page</Link>
        <Link to={"./Cars"} className='ho-p2'>back</Link>
        <div className="container">
          <div className="row">
          <div className="car-det">
            <img src='https://png2.cleanpng.com/sh/84a964030ac113f1d531bd9862c739e1/L0KzQYm3UsAzN6Z0j5H0aYP2gLBuTcIxOWcyhdd7Y3XndcS0gvVvgl5mhdk2Z4Swc7L5Tf5qe6Rmhp9wdD31Pb7skvNmbJZ4Rd9ucnPodLb6TfFub15sjJ98b3zkgrPsgf0ua5J3RadqN0S7RbW5g8g5a5Y5RqcBNUKzR4K7UcUyP2Y9TaoCNEi1QYa1kP5o/kisspng-2016-mercedes-benz-amg-gt-car-nissan-gt-r-mercedes-mercedes-amg-gt-solarbeam-car-5a7485d2c88ce4.5652071415175858748215.png' alt="car9" />
            <div className="text"><span className="subheading">mercedes</span>
              <h2>AMG</h2>
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
                    11-kmpl
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faCab} /></p>
                  <p>seating-capacity<br />
                    2-seater
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faLuggageCart} /></p>
                  <p>Luggage-capacity<br />
                    402-litters
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faRoad} /></p>
                  <p>fuel capacity<br />
                    72-litters
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="media">
                <div className="media-body">
                  <p><FontAwesomeIcon icon={faGear} /></p>
                  <p>transmission<br />
                    6 speed-gear(automatic)
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
                  The Mercedes-Benz AMG GT has 1 Petrol Engine on offer. The Petrol engine is 
                  3982 cc . It is available with Automatic transmission.Depending upon the variant 
                  and fuel type the AMG GT has a mileage of 12.65 kmpl . The AMG GT is a 2 seater 
                  8 cylinder car and has length of 4544mm, width of 2075mm and a wheelbase of 2630mm.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dv>
  )
}
export default Amg;
