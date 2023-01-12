import React, { Component, Fragment } from 'react'
import ReactPlayer from 'react-player/file'
import YoutubePlayer from 'react-player/youtube'

import Img3 from '../../../../assets/ClientsLogo/almasakin.jpeg'
import Img4 from '../../../../assets/ClientsLogo/darco.jpeg'
import Img9 from '../../../../assets/ClientsLogo/majdiah.jpeg'
import Img17 from '../../../../assets/ClientsLogo/alargan.png'
import Img18 from '../../../../assets/ClientsLogo/alawaly.png'

import './index.scss';

export class Realestate extends Component {
    render() {
        return (
            <Fragment>
                <div className="exit1-project-detail-wrapper">
                    <div className="project-detail-container">

                        <div className="pro-intro">
                            <p className="pro-type">Real Estate Visualization</p>
                            <h3 className="pro-title">Interactive solutions for Real Estate properties</h3>
                            <div className='img'>
                                <YoutubePlayer url="https://youtu.be/hWIyHsy-5eg" controls={ true } />
                            </div>
                        </div>
                        <div className="pro-details">
                            <div className="text-content">
                                <h6 className="topic">INTRODUCTION</h6>
                                <p>Showcase your upcoming projects master plan through high tech solutions that can capture the entire essence of the improved lifestyle offerings for your clients. </p>
                                <p>Make the most out of your expos or digital channels through our various solutions.</p>
                                <p>Power of unreal 5 engine - Create the most hyper realistic simulations for your projects in the most dynamic 3D with search navigation based on apartments or villas type. </p>
                            </div>
                            <div className="text-content">
                                <div className='img'>
                                    <ReactPlayer url="https://hnh-covid.s3.amazonaws.com/hnh_real_estate.mp4" controls={ true } />
                                </div>

                                <p>Or Use our mid level solutions to wow all your visitors & sign them up for the new properties.</p>
                                <div className='img'>
                                    <YoutubePlayer url="https://www.youtube.com/watch?v=uYXwbE_CTec" controls={ true } />
                                </div>
                            </div>
                            <div className="text-content">
                                <h6 className="topic">Features of our services</h6>
                                <div className='feature-master'>
                                    <div className='feature-box'>
                                        <p> - Price search bar</p>
                                        <p> - Room wise search bar</p>
                                        <p> - Area wise search bar</p>
                                        <p> - View floor plans</p>
                                        <p> - Highlight your properties</p>
                                        <p> - Custom animations</p>
                                        <p> - Route marking for famous landmarks in your cities </p>
                                    </div>
                                    <div className='feature-box'>
                                        <p> - Day & night view </p>
                                        <p> - CRM integration</p>
                                        <p> - Sales lead generation form </p>
                                        <p> - Upload videos, images & brochures </p>
                                        <p> - Works on windows / android applications</p>
                                        <p> - Web & mobile Options</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-content">
                                <h6 className="topic">Augmented reality</h6>
                                <p>Can’t make clients visit your property, no worries take your property to your clients! </p>
                                <p>Through augmented reality technology clients can walk in their new homes just by scanning a QR code & voila ! </p>
                                <div className='img'>
                                    <YoutubePlayer url="https://www.youtube.com/watch?v=suLIDA7qkeE" controls={ true } />
                                </div>
                                <h6 className="topic">Features of our services</h6>
                                <p> - Multiple doors</p>
                                <p> - 360 degree movement</p>
                                <p> - Image change automatically</p>
                                <p> - Works with any smartphones </p>
                                <p> - No app download requirement </p>
                            </div>
                            <div className="inner-content">
                                <div className="hh-client-content">
                                    <h6 className="topic">Our Clients</h6>
                                    <p> We like our clients. We like helping them seize opportunities and find solutions.
                                        They are friends and co-conspirators. Together we build ideas, and build on those ideas.   </p>
                                </div>

                                <div className="hh-client-details">
                                    <div className='hh-client-details-content'>
                                        <div className="img-container">
                                            <img src={ Img3 } alt="" />
                                            <img src={ Img4 } alt="" />
                                            <img src={ Img9 } alt="" />
                                            <img src={ Img17 } alt="" />
                                            <img src={ Img18 } style={ { height: '80px' } } alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Realestate
