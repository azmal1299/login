import { event } from 'jquery';
import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
import './index.scss';
import '/pngegg.png';
function Register(){

    const [state, setState] = useState(
        {
            firstname:'',
            lastname:'',
            email: '',
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
        const { firstname,lastname,email, password } = state;
        console.log('firstname:', firstname);
        console.log('lastname:', lastname);    
        console.log('email:',email);
        console.log('password:', password);
    }
    const { firstname ,lastname,email, password } = state;
return(
   
    <div className="form">
        <h1 className="heading">Register</h1>
        <input 
        type="text" 
        value={firstname}
        placeholder="firstname"
        onChange={(event) =>handleChange(event, 'firstname')} 
        />      
        <input 
        type="text" 
        placeholder="lastname"
        value={lastname}
        onChange={(event) =>handleChange(event, 'lastname')}
        />      
        <input 
        type="email"
        value={email} 
        placeholder="email"
        onChange={(event) =>handleChange(event, 'email')}
        />
        <input
        type="password" 
        placeholder="password"
        onChange={(event) =>handleChange(event, 'password')}
        />
        <button type='submit'  onClick={() => handleSubmit()}  className="submit-btn">Register</button>
        <a href='/index' className="link">already have account? log in here</a>
        </div>
    )
}
export default Register;
