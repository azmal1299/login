import React, { useState } from 'react';
// import {useHistory} from "react-router-dom";
import './index.scss';

function Login() {
    // let hstory= useHistory();
    // history.pushState('/register')
    const [state, setState] = useState(
        {
            username: '',
            password: '',
        }
    )
    const handleChange = (event, id) => {
        console.log('event:', event.target.value, id);
        setState({
            ...state,
            [id]: event.target. value,
        })
    }
    const handleSubmit = () => {
        const { username, password } = state;
        console.log('username:', username);
        console.log('password:', password);
    }
    const { username, password } = state;
    return (
        <div className="form">
            <h1 className="heading">Login page</h1>
            <input
                type="text"
                value={username}
                placeholder="username"
                onChange={(event) => handleChange(event, 'username')}
            />
            <input
                type="password"
                value={password}
                placeholder="password"
                onChange={(event) => handleChange(event, 'password')}
            />
            <button type="submit" onClick={() => handleSubmit()} className="submit-btn">Login</button>
            <a href='/register' className="link">don't have an account? Rgister here</a>
            <a href="#" className="link">main-page</a>
        </div>
    )
}

export default Login;