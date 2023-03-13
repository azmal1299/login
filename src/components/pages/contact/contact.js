// import { name } from 'file-loader';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './contact.scss';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Submitting form with name: ${name}, email: ${email}, message: ${message}`);
        // You can add your own logic here to submit the form data to your server
    };


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

                <label>Name:</label>
                <div className='min'>
                    <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} required />
                </div>

                <label>Email:</label>
                <div className='min'>
                    <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
</div>
                    <label>Message:</label>
                    <div className='min'>
                        <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} required />
                    </div>
                    <button type="submit" className='submit-msg' onSubmit={handleSubmit}>Submit</button>
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
export default Contact;