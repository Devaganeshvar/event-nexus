import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter, faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useNavigate,Link } from 'react-router-dom';
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
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true); 
  };

  const handleMouseLeave = () => {
    setIsHovered(false); 
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
      <a
        href="#"
        style={{
          display: 'block',
          marginTop: '10px',
          textAlign: 'center',
          color: isHovered ? '#e94e77' : '#333', 
          textDecoration: isHovered ? 'underline' : 'none',
          cursor: 'pointer', 
        }}
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
      >
        <Link to="/forgotpassword">Forgot your password?</Link>
      </a>
    </form>
  );
};

export default LoginForm;
