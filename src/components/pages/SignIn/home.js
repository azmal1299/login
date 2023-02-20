import React from 'react';

// import {useHistory} from "react-router-dom";
import { Link } from 'react-router-dom';
import './home.scss';
function Home() {

    return (
        <div className='home'>
            <nav>
                <label className="navbar">car<span> -buy</span></label>
                <ul>
                    <li><Link to="./home">home</Link></li>
                    <li><Link to="./cars">cars</Link></li>
                    <li><Link to="./contact">contact</Link></li>
                    <li><Link to="./about">about</Link></li>
                    <li><Link to="./">logout</Link></li>
                </ul>
            </nav>

            <div className='sections'>
                <section className='section1 '>
                    <div className="paa">best <span>car dealer</span> in town
                        <button className="contact1">contact-us</button>
                    </div>
                </section>

                <section className='cars'>

            </section>
            </div>
        </div>

    )
}
export default Home;