import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faXTwitter, faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import axios from 'axios';
import './Login.css'; 

const SignupForm = ({ onToggleMode }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/reg', formData);
      console.log('User registered:', response.data);
      alert('Registration successful');
    } catch (error) {
      console.error('There was an error registering the user!', error);
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <FontAwesomeIcon icon={faUser} style={{ color: '#333', position: 'absolute', left: '20px', fontSize: '1.1rem' }}/>
        <input 
          type="text" 
          placeholder="Username" 
          name="username" 
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <FontAwesomeIcon icon={faEnvelope} style={{ color: '#333', position: 'absolute', left: '20px', fontSize: '1.1rem' }}/>
        <input 
          type="email" 
          placeholder="Email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <FontAwesomeIcon icon={faLock} style={{ color: '#333', position: 'absolute', left: '20px', fontSize: '1.1rem' }}/>
        <input 
          type="password" 
          placeholder="Password" 
          name="password" 
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <input type="submit" className="btn" value="Sign up" />
      <p className="social-text">Or Sign up with social platforms</p>
      <div className="social-media">
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faXTwitter} /></a>
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faGoogle} /></a>
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      </div>
    </form>
  );
};

export default SignupForm;