import React, { Component, Fragment } from 'react'

//Shared Components
import Header from '../../shared/HeaderLogo'

//UI
import Overview from './components'

import './index.scss'

class RealEstate extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        setTimeout(() => {
            this.scrollDown()
        }, 4400);
    }

    scrollDown() {
        const page = document.getElementById('home')
        window.scrollTo(0, page.scrollHeight);
    }

    render() {
        return (
            <Fragment>
                <div className="hh__home-wrapper" >
                    <div className="hh__home-wrap-container">
                        <Header />
                        <section className="viewport" id="home" >
                            <div className="viewport-container">
                                <div className="part part-left">
                                    <h3 className="title">
                                        Easy to understand
                                    </h3>
                                    <h3 className="title">
                                        impossible to ignore
                                    </h3>


                                    <div className="social-links">
                                        <a href="https://www.facebook.com/hnhreality" target="_blank">
                                            <div className="item">
                                                <i className="fa fa-facebook"></i>
                                            </div>
                                        </a>
                                        <a href="https://twitter.com/HandHReality" target="_blank">
                                            <div className="item">
                                                <i className="fa fa-twitter"></i>
                                            </div>
                                        </a>
                                        <a href="https://www.instagram.com/hh_technology/" target="_blank">
                                            <div className="item">
                                                <i className="fa fa-instagram"></i>
                                            </div>
                                        </a>
                                        <a href="https://www.linkedin.com/company/hnhtechnology/mycompany/?viewAsMember=true" target="_blank">
                                            <div className="item">
                                                <i className="fa fa-linkedin-in"></i>
                                            </div>
                                        </a>
                                        <a href="https://www.youtube.com/channel/UCTd8pGslGaqFDiylguMZWlQ" target="_blank">
                                            <div className="item">
                                                <i className="fa fa-youtube-play"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <Overview />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default RealEstate
