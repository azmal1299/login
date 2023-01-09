import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

//UI
import hhlogo from '../../../assets/services/company_logo.png' //Logo
import './index.scss'

class HeaderLogo extends Component {

    render() {
        return (
            <Fragment>
                <header className="hh__header smaller" >
                    <div className="hh__header-container">
                        <div className="hh__header-left">
                            <Link to="/" > <img className="brand-logo" src={ hhlogo } alt="" /></Link>
                        </div>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default HeaderLogo;
