import React, { useState } from 'react';
import axios from 'axios';
import './ContactusStyles.css';
import Handshake from '../../assets/contactus/Handshake.png';

const ContactusForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/contactus', formData);
            console.log(res.data);
            setFormData({ fullName: '', email: '', message: '' });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='contact-form'>
            <h2 className='contact-title'>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Full Name</label>
                    <input
                        type='text'
                        name='fullName'
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder='Your name'
                        className='form-input'
                    />
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Your email'
                        className='form-input'
                    />
                </div>
                <div className='form-group'>
                    <label>Message</label>
                    <textarea
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='Your message'
                        className='form-textarea'
                    ></textarea>
                </div>
                <button type='submit' className='submit-button'>Submit</button>
            </form>
            <div className='contact-info'>
                <div>Contact: journalprobe@gmail.com</div>
            </div>
            <div className='social-links'>
                <i className='fab fa-facebook'></i>
                <i className='fab fa-instagram'></i>
                <i className='fab fa-twitter'></i>
            </div>
        </div>
    );
};

const Contactus = () => {
    return (
        <div className='page-container'>
            <div className='contact-container'>
                <div className='contact-image'>
                    <img src={Handshake} alt='Contact us' className='image' />
                </div>
                <div className='contact-form-container'>
                    <div className='contact-border'>
                        <ContactusForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactus;
