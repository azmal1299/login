import React from 'react';
// import { Link } from 'react-router-dom';
import './cars.scss';
// import Home from './home';
function Cars() {

    return (
        <div className='car'>
          
            <Link to="./home" className="home">home-page</Link>
            <Link to="/" className="logout">log out</Link>

            

        </div>
    )
}
export default Cars;