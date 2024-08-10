import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter, faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // <-- Import axios here
import './Login.css';
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const LoginForm = ({ onToggleMode }) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loginData.email === 'admin@gmail.com' && loginData.password === '12345') {
      // Static validation for admin
      localStorage.setItem('user', JSON.stringify({ email: loginData.email, role: 'admin' }));
      navigate('/admin');
    } else {
      try {
        const response = await axios.post('http://localhost:8080/login', loginData);
        console.log('User logged in:', response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/animation');
      } catch (error) {
        console.error('There was an error logging in!', error);
        alert('Login failed');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sign-in-form">
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{ color: '#333', position: 'absolute', left: '20px', fontSize: '1.1rem' }}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          style={{ paddingLeft: '60px', color: '#333', borderColor: emailError ? 'red' : '' }}
        />
      </div>
      
      <div className="input-field">
        <FontAwesomeIcon
          icon={faLock}
          style={{ color: '#333', position: 'absolute', left: '20px', fontSize: '1.1rem' }}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          style={{ paddingLeft: '60px', color: '#333', borderColor: passwordError ? 'red' : '' }}
        />
      </div>
      <input type="submit" value="Login" className="btn solid" />
      <p className="social-text">Or Sign in with social platforms</p>
      <div className="social-media">
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faXTwitter} /></a>
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faGoogle} /></a>
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      </div>
    </form>
  );
};

export default LoginForm;
