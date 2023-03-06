import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cookies from "browser-cookies";
import { v4 as uuidv4 } from 'uuid';
import history from "../../../helpers/history";
// import {useHistory} from "react-router-dom";
import './index.scss';
// import { set } from 'mongoose';

function Login() {
    // let hstory= useHistory();
    // history.pushState('/home')
    const [state, setState] = useState(
        {
            username: '',
            password: '',
        }
    );
    const handleChange = (event, id) => {
        console.log('event:', event.target.value, id);
        setState({
            ...state,
            [id]: event.target. value,
        });
    };
    const handleSubmit = () => {
        const { username, password } = state;
        const token =uuidv4();
        if (token){
            console.log("token :", token);
            cookies.set("token" , token);
            history.push("/home");
        }
        // console.log('username:', username);
        // console.log('password:', password);
    };
    const { username, password } = state;
    return (
        <div className="form">
            <h1 className="heading">Login page</h1>
            <input
                type="text"
       
                value={username}
                placeholder="username"
                onChange={(event) => {handleChange(event, 'username');}}
            />
            <input
                type="password"
                value={password}
                placeholder="password"
                onChange={(event) => {handleChange(event, 'password');}}
            />
            <button type="submit" onClick={() => handleSubmit() } className="submit-btn">Login</button>
            {/* <p> */}
            <Link to={"./register"} className="link">don't have an account? Rgister here</Link>
            <Link to={"./home"} className="link">main-page</Link>
        </div>
    );
}

export default Login;