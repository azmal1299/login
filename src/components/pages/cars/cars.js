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
                                        <p><Link to="./harrier" className='link'>select</Link></p>
                                    </div>
                                </div>
                                <div className='car-col'>
                                    <div className='car-2'>
                                        <img src='https://img.indianautosblog.com/2020/06/04/toyota-fortuner-legender-black-front-quarters-0295.jpg' alt='car2' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>toyota fortuner Legender</p>
                                        <span className="cat">toyota</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./fortuner" className='link'>select</Link></p>
                                    </div>
                                </div>
                                <div className='car-col'>
                                    <div className='car-3'>
                                        <img src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/toyota_innova_hycross-sixteen_nine.png?VersionId=2NZGIYgLeaNq3XBYtP35xEH7tUvlJK6h&size=690:388' alt='car3' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>toyota innova hycross</p>
                                        <span className="cat">toyota</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./hycross" className='link'>select</Link></p>
                                    </div>
                                </div>
                                <div className='car-col'>
                                    <div className='car-4'>
                                        <img src='https://s3.ap-south-1.amazonaws.com/rowthautoss3/uploads/5e6bdd80f36e678c7625f186/a62cb410-f773-11ec-9ef3-b1ea8dc1ed01.png' alt='car4' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>mahindra scorpio N</p>
                                        <span className="cat">mahindra</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./scorpio" className='link'>select</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className='row1'>
                                <div className='car-col'>
                                    <div className='car-5'>
                                        <img src='https://cars.tatamotors.com/images/kaziranga/nexon/grassland-beiger.jpg' alt='car5' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>tata nexon</p>
                                        <span className="cat">tata</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./nexon" className='link'>select</Link></p>
                                    </div>
                                </div>
                                <div className='car-col'>
                                    <div className='car-6'>
                                        <img src='https://imgd.aeplcdn.com/1056x594/n/cw/ec/101055/virtus-exterior-right-front-three-quarter.jpeg?isig=0&q=75&wm=1' alt='car6' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>volkswagen virtus</p>
                                        <span className="cat">volkswagen</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./virtus" className='link'>select</Link></p>
                                    </div>
                                </div>
                                <div className='car-col'>
                                    <div className='car-7'>
                                        <img src='https://imgd.aeplcdn.com/1056x594/cw/ec/21687/Volkswagen-GTI-Exterior-119312.jpg?wm=1&q=75' alt='car7' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>polo-GTi</p>
                                        <span className="cat">volkswagen</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./polo" className='link'>select</Link></p>
                                    </div>
                                </div>
                                <div className='car-col'>
                                    <div className='car-8'>
                                        <img src='http://provincialauto.in/wp-content/uploads/2021/09/profile1628999561-removebg-preview.png' alt='car1' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>XUV 700</p>
                                        <span className="cat">mahindra</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./xuv700" className='link'>select</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className='row1'>
                                <div className='car-col'>
                                    <div className='car-9'>
                                        <img src='https://imgd.aeplcdn.com/664x374/n/cw/ec/123185/grand-vitara-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75' alt='car9' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>grand vitara</p>
                                        <span className="cat">maruti suzuki</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./vitara" className='link'>select</Link></p>
                                    </div>
                                </div>
                                <div className='car-col'>
                                    <div className='car-1'>
                                        <img src='https://png2.cleanpng.com/sh/84a964030ac113f1d531bd9862c739e1/L0KzQYm3UsAzN6Z0j5H0aYP2gLBuTcIxOWcyhdd7Y3XndcS0gvVvgl5mhdk2Z4Swc7L5Tf5qe6Rmhp9wdD31Pb7skvNmbJZ4Rd9ucnPodLb6TfFub15sjJ98b3zkgrPsgf0ua5J3RadqN0S7RbW5g8g5a5Y5RqcBNUKzR4K7UcUyP2Y9TaoCNEi1QYa1kP5o/kisspng-2016-mercedes-benz-amg-gt-car-nissan-gt-r-mercedes-mercedes-amg-gt-solarbeam-car-5a7485d2c88ce4.5652071415175858748215.png' alt='car1' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>AMG-GT</p>
                                        <span className="cat">mercedes</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./amg" className='link'>select</Link></p>
                                    </div>
                                </div>
                                <div className='car-col'>
                                    <div className='car-1'>
                                        <img src='https://www.pngmart.com/files/22/BMW-M8-PNG-Picture.png' alt='car11' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>M8</p>
                                        <span className="cat">BMW</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./m8" className='link'>select</Link></p>
                                    </div>
                                </div>
                                <div className='car-col'>
                                    <div className='car-1'>
                                        <img src='https://freepngimg.com/thumb/mercedes/72-black-mercedes-g-class-gelandewagen-car-png-image.png' alt='car12' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>G-wagon</p>
                                        <span className="cat">mercedes</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./gwagon" className='link'>select</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className='row1'>
                                <div className='car-col'>
                                    <div className='car-9'>
                                        <img src='https://imgd.aeplcdn.com/664x374/n/cw/ec/123185/grand-vitara-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75' alt='car9' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>grand vitara</p>
                                        <span className="cat">maruti suzuki</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./vitara" className='link'>select</Link></p>
                                    </div>
                                </div>
                                <div className='car-col'>
                                    <div className='car-1'>
                                        <img src='https://png2.cleanpng.com/sh/84a964030ac113f1d531bd9862c739e1/L0KzQYm3UsAzN6Z0j5H0aYP2gLBuTcIxOWcyhdd7Y3XndcS0gvVvgl5mhdk2Z4Swc7L5Tf5qe6Rmhp9wdD31Pb7skvNmbJZ4Rd9ucnPodLb6TfFub15sjJ98b3zkgrPsgf0ua5J3RadqN0S7RbW5g8g5a5Y5RqcBNUKzR4K7UcUyP2Y9TaoCNEi1QYa1kP5o/kisspng-2016-mercedes-benz-amg-gt-car-nissan-gt-r-mercedes-mercedes-amg-gt-solarbeam-car-5a7485d2c88ce4.5652071415175858748215.png' alt='car1' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>AMG-GT</p>
                                        <span className="cat">mercedes</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./amg" className='link'>select</Link></p>
                                    </div>
                                </div>
                                <div className='car-col'>
                                    <div className='car-1'>
                                        <img src='https://www.pngmart.com/files/22/BMW-M8-PNG-Picture.png' alt='car11' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>M8</p>
                                        <span className="cat">BMW</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./m8" className='link'>select</Link></p>
                                    </div>
                                </div>
                                <div className='car-col'>
                                    <div className='car-1'>
                                        <img src='https://freepngimg.com/thumb/mercedes/72-black-mercedes-g-class-gelandewagen-car-png-image.png' alt='car12' />
                                    </div>
                                    <div className='car-detail'>
                                        <p>G-wagon</p>
                                        <span className="cat">mercedes</span>
                                        <p className="price ml-auto">$500 <span>/day</span></p>
                                        {/* <button type='submit'>select</button> */}
                                        <p><Link to="./gwagon" className='link'>select</Link></p>
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