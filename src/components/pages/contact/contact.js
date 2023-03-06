// import { name } from 'file-loader';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './contact.scss';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            // submit the form to your server
            console.log('Submitting form...');
            setName('');
            setEmail('');
            setMessage('');
        } else {
            setErrors(errors);
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!name.trim()) {
            errors.name = 'Please enter your name';
        }
        if (!email.trim()) {
            errors.email = 'Please enter your email';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Please enter a valid email';
        }
        if (!message.trim()) {
            errors.message = 'Please enter your message';
        }
        return errors;
    };
function Contact() {

    return (
        <div className='contact'>
            <Link to="./home" className="home">home-page</Link>
            <Link to="/" className="logout">log out</Link>
            <h1>contact-us</h1>
            <div className='mobile'>
                <ul><h6>contact with mobile</h6>
                    <li>mobile: 9876543210</li>
                    <li>tel: 152-653-798</li></ul>
            </div>
            <div className='form'>
                <h6>contact with message</h6>
                <div className='min'>
                    <label>Name:   </label>
                    <input
                        type="text"
                        name="name"
                        placeholder='user name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <div className="error">{errors.name}</div>}
                </div>
                <div className='min'>
                    <label>Email:   </label>
                    <input
                        type="email"
                        name="email"
                        placeholder='user email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <div className='min'>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={message}
                        placeholder='enter message'
                        onChange={(e) => setMessage(e.target.value)}>
                    </textarea>
                    {errors.message && <div className="error">{errors.message}</div>}
                </div>
                <button className="submit-msg" type="submit" onClick={() => handleSubmit()}>submit</button>
            </div>
            <div className='email'>
                <ul>
                    <h6>contact with email</h6>
                    <li>email 1: aslalal@gmail.com</li>
                    <li>email 2: abilaa@gmail.com</li>
                </ul>
            </div>
            </div>
            );
            };
        }
            export default Contact;