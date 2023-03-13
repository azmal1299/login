import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarAlt, faContactCard, faHandHolding, faHandsBound, faHandshakeAlt, faHomeAlt, faManatSign, faPowerOff } from "@fortawesome/free-solid-svg-icons";
// import {useHistory} from "react-router-dom";
import cookies from "browser-cookies";
import { History } from '../../../helpers/history';
import { Link } from 'react-router-dom';
import './home2.scss';
// import { Navbar } from 'react-bootstrap';

function Navbar() {
    const handleLogout = () => {
        cookies.erase("token");
        history.push("/");
      };
      console.log("history: ", history.location.pathname);
    
      const pathName = history.location.pathname;
    
    return (
        <div className='home'>
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fa fa-bars"></i>
                </label>
                <label className="navbar">car<span> -buy</span></label>
                <ul>
                    <li><Link to="./home"><FontAwesomeIcon icon={faHomeAlt} />home</Link></li>
                    <li><Link to="./cars"><FontAwesomeIcon icon={faCarAlt} />cars</Link></li>
                    <li><Link to="./contact"><FontAwesomeIcon icon={faContactCard} />contact</Link></li>
                    <li><Link to="./about"><FontAwesomeIcon icon={faHandshakeAlt} />about</Link></li>
                    <li><Link to="./" onClick={()=>handleLogout()}><FontAwesomeIcon icon={faPowerOff} />logout</Link></li>
                    {/* <li><Link to="./home1">home1</Link></li>
                        <li><Link to="./cars1">car1</Link></li> */}
                </ul>
            </nav>
            </div>
            )
            }
            export default Navbar;