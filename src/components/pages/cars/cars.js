import React from 'react';
import { Link } from 'react-router-dom';
import './cars.scss';
import Bootstrap from '../../../../../react-base-code/node_modules/bootstrap'
// import Home from './home';
function Cars() {

    return (
        <div className='carspage'>
            <div className='container'>
                <Link to={"./Home"} className='ho-p'>home-page</Link>
                <div className='car-select'>
                    <div className='car-container'>
                        <h1>select your favorite cars</h1>
                        <div className='car-row'>
                            <div className='row1'>
                                <div className='car-col'>
                                    <div className='car-1'>
                                        <img src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20190912023546_orcus_white_dt_1.png&w=700&q=90&c=1' alt='car1' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>tata harrier</p>
                                        <span className="cat">tata</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./car1" className='link'>select</Link></p>
                                    </div>
                                </div>
                                <div className='car-col'>
                                    <div className='car-2'>
                                        <img src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20190912023546_orcus_white_dt_1.png&w=700&q=90&c=1' alt='car1' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>tata harrier</p>
                                        <span className="cat">tata</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./car2" className='link'>select</Link></p>
                                    </div>
                                </div>
                                <div className='car-col'>
                                    <div className='car-3'>
                                        <img src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20190912023546_orcus_white_dt_1.png&w=700&q=90&c=1' alt='car1' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>tata harrier</p>
                                        <span className="cat">tata</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./car3" className='link'>select</Link></p>
                                    </div>
                                </div>
                                <div className='car-col'>
                                    <div className='car-4'>
                                        <img src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20190912023546_orcus_white_dt_1.png&w=700&q=90&c=1' alt='car1' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>tata harrier</p>
                                        <span className="cat">tata</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./car3" className='link'>select</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className='row2'>
                                <div className='car-col'>
                                    <div className='car-5'>
                                        <img src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20190912023546_orcus_white_dt_1.png&w=700&q=90&c=1' alt='car1' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>tata harrier</p>
                                        <span className="cat">tata</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./car3" className='link'>select</Link></p>
                                    </div>
                                </div>
                                <div className='car-col'>
                                    <div className='car-6'>
                                        <img src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20190912023546_orcus_white_dt_1.png&w=700&q=90&c=1' alt='car1' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>tata harrier</p>
                                        <span className="cat">tata</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./car3" className='link'>select</Link></p>
                                    </div>
                                </div>
                                <div className='car-col'>
                                    <div className='car-7'>
                                        <img src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20190912023546_orcus_white_dt_1.png&w=700&q=90&c=1' alt='car1' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>tata harrier</p>
                                        <span className="cat">tata</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./car3" className='link'>select</Link></p>
                                    </div>
                                </div>
                                <div className='car-col'>
                                    <div className='car-8'>
                                        <img src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20190912023546_orcus_white_dt_1.png&w=700&q=90&c=1' alt='car1' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>tata harrier</p>
                                        <span className="cat">tata</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./car3"className='link'>select</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className='select'>
                                <h1>here are your new cars</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cars;