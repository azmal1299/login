import React, { Component, Fragment } from 'react'

//UI
import hhlogo from '../../../assets/ClientsLogo/logo.png'
import './Footer.scss'

class Footer extends Component {

    handleClick() {
        window.open = "https://hnhmena.com"
    }

    render() {

        return (
            <Fragment>
                <div className="footer-wrapper" data-aos="fade-up" >
                    <div className="footer-container">
                        <div className="footer-big">
                            <div className="ft-left">
                                <h3 className="ft-title">Got a Project? <span>Let's talk</span> </h3>
                            </div>
                            {/* <div className="ft-right">
                                <button data-tf-slider="sblQtEu6" data-tf-position="right" data-tf-opacity="100" data-tf-iframe-props="title=H&H - 01- Lead Capture Form Template (copy)" data-tf-transitive-search-params style={ { all: 'unset', 'font-family': 'Helvetica,Arial,sans-serif', display: 'inline-block', maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', backgroundColor: '#07B19A', color: '#fff', fontSize: '20px', borderRadius: '25px', padding: '0 33px', fontWeight: 'bold', height: '50px', cursor: 'pointer', lineHeight: '50px', textAlign: 'center', margin: 0, textDecoration: 'none' } }>Contact us now</button>
                            </div> */}
                        </div>
                        <div className="footer-small">
                            <div className="logo-brand">
                                <img src={ hhlogo } alt="" />
                            </div>

                            <div className="copy-right">
                                &copy; All rights reserved. H&H TECHNOLOGY
                            </div>

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
                </div>
            </Fragment>
        )
    }
}

export default Footer
