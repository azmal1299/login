import React from "react";
import { Link } from "react-router-dom";
import './personaldetail.scss';

function Personaldetail(){
    return(
        <div className="personal">
            <div className="detal">
                <ul>
                    <li>
                        <label>first name</label>
                        <input type={text}
                            placeholder="firstname"
                            value={firstname}
                            onChange={(event) =>handleChange(event, 'firstname')} 
                            required
                        />
                    </li>
                    <li>
                        <label>last name</label>
                        <input type={text}
                            placeholder="lastname"
                            value={lastname}
                            onChange={(event) =>handleChange(event, 'lastname')} 
                            required
                        />
                    </li>
                    <li>
                        <label>email</label>
                        <input type={email}
                            placeholder="email"
                            value={firstname}
                            onChange={(event) =>handleChange(event, 'email')} 
                            required
                        />
                    </li>
                    <li>
                        <label>address</label>
                        <input type={text}
                            placeholder="door-no,street,town"
                            value={address}
                            onChange={(event) =>handleChange(event, 'address')} 
                            required
                        />
                    </li>
                    <li>
                        <label>district</label>
                        <input type={text}
                            placeholder="district"
                            value={district}
                            onChange={(event) =>handleChange(event, 'district')} 
                            required
                        />
                    </li>
                    <li>
                        <label>State</label>
                        <input type={text}
                            placeholder="State"
                            value={State}
                            onChange={(event) =>handleChange(event, 'State')} 
                            required
                        />
                    </li>
                    <li>
                        <label>first name</label>
                        <input type={text}
                            placeholder="firstname"
                            value={firstname}
                            onChange={(event) =>handleChange(event, 'firstname')} 
                            required
                        />
                    </li>
                    <li>
                        <label>country</label>
                        <input type={text}
                            placeholder="country"
                            value={country}
                            onChange={(event) =>handleChange(event, 'country')} 
                            required
                        />
                    </li>
                    <li>
                        <label>pincode</label>
                        <input type={Number}
                            placeholder="pincode"
                            value={pincode}
                            onChange={(event) =>handleChange(event, 'pincode')} 
                            required
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Personaldetail;
