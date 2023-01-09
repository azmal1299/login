import React, { Component, Fragment } from 'react'
import ReactPlayer from 'react-player/file'
import YoutubePlayer from 'react-player/youtube'

import Img1 from '../../../../assets/ClientsLogo/alj.png';
import Img2 from '../../../../assets/ClientsLogo/exit1.jpg'
import Img3 from '../../../../assets/ClientsLogo/almasakin.jpeg'
import Img4 from '../../../../assets/ClientsLogo/darco.jpeg'
import Img5 from '../../../../assets/ClientsLogo/fakeeh.png'
import Img6 from '../../../../assets/ClientsLogo/monad.jpg'
import Img7 from '../../../../assets/ClientsLogo/bonafide.jpg'
import Img8 from '../../../../assets/ClientsLogo/injazat.png'
import Img9 from '../../../../assets/ClientsLogo/majdiah.jpeg'
import Img10 from '../../../../assets/ClientsLogo/messe.jpeg'
import Img11 from '../../../../assets/ClientsLogo/ace.jpeg'
import Img12 from '../../../../assets/ClientsLogo/petroRabigh.jpeg'
import Img13 from '../../../../assets/ClientsLogo/Pillars.png'
import Img14 from '../../../../assets/ClientsLogo/SABIC_Logo_RGB.png'
import Img15 from '../../../../assets/ClientsLogo/samirAbbas.png'
import Img16 from '../../../../assets/ClientsLogo/sgh.png'
import Img17 from '../../../../assets/ClientsLogo/alargan.png'
import Img18 from '../../../../assets/ClientsLogo/alawaly.png'

import './index.scss';

export class Exitone extends Component {
    render() {
        return (
            <Fragment>
                <div className="exit1-project-detail-wrapper">
                    <div className="project-detail-container">

                        <div className="pro-intro">
                            <p className="pro-type">Real Estate Visualization</p>
                            <h3 className="pro-title">Interactive solutions for Real Estate properties</h3>
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
                                <p> - Price search bar</p>
                                <p> - Room wise search bar</p>
                                <p> - Area wise search bar</p>
                                <p> - View floor plans</p>
                                <p> - Highlight your properties</p>
                                <p> - Custom animations</p>
                                <p> - Route marking for famous landmarks in your cities </p>
                                <p> - Day & night view </p>
                                <p> - CRM integration</p>
                                <p> - Sales lead generation form </p>
                                <p> - Upload videos, images & brochures </p>
                                <p> - Works on windows / android applications</p>
                                <p> - Web & mobile Options</p>
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
                                    <p className="hh-client-para"> We like our clients. We like helping them seize opportunities and find solutions.
                                        They are friends and co-conspirators. Together we build ideas, and build on those ideas.   </p>
                                </div>

                                <div className="hh-client-details">
                                    <div className='hh-client-details-content'>
                                        <div className="img-container">
                                            <img src={ Img1 } alt="" />
                                            <img src={ Img2 } alt="" />
                                            <img src={ Img3 } alt="" />
                                            <img src={ Img4 } alt="" />
                                            <img src={ Img5 } alt="" />
                                            <img src={ Img6 } alt="" />
                                            <img src={ Img7 } alt="" />
                                            <img src={ Img8 } alt="" />
                                            <img src={ Img9 } alt="" />
                                            <img src={ Img10 } alt="" />
                                            <img src={ Img11 } alt="" />
                                            <img src={ Img12 } alt="" />
                                            <img src={ Img13 } alt="" />
                                            <img src={ Img14 } alt="" />
                                            <img src={ Img15 } alt="" />
                                            <img src={ Img16 } alt="" />
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

export default Exitone
