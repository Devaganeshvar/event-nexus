import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EventNeuxAnimation.css';

const EventNeuxAnimation = () => {
  const [showText, setShowText] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 3000);

    const navigateTimer = setTimeout(() => {
      navigate('/');
    }, 6000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <div className="animation-container">
      <div className="black-box"></div>
      {showText && <div className="eventneux-text">EventNexus</div>}
    </div>
  );
};

export default EventNeuxAnimation;
