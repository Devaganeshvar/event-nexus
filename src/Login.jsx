import React, { useState } from "react";
import './Login.css';
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import SignupImage from "./signup.png"; 
import LoginImage from "./Login.png";

const Login = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleMode = () => {
    setIsSignUpMode(prevMode => !prevMode);
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {isSignUpMode ? (
            <SignupForm onToggleMode={toggleMode} />
          ) : (
            <LoginForm onToggleMode={toggleMode} />
          )}
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Welcome! Join us today and explore a world of opportunities. Sign up now to get started on your journey with us and enjoy exclusive benefits and features tailored just for you.</p>
            <button className="btn transparent" onClick={toggleMode}>Sign up</button>
          </div>
          <img src={LoginImage} className="image" alt="Login Illustration" /> 
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Welcome back! If you already have an account, sign in to continue enjoying our services and stay connected with our community. We're glad to see you again!</p>
            <button className="btn transparent" onClick={toggleMode}>Sign in</button>
          </div>
          <img src={SignupImage} className="image" alt="Signup Illustration" /> 
        </div>
      </div>
    </div>
  );
};

export default Login;
