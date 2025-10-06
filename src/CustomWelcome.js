import React, { useState, useEffect } from 'react';
import './CustomWelcome.css';

const CustomWelcome = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show text with delay for smooth animation
    const showTimer = setTimeout(() => {
      setShowText(true);
    }, 300);

    // Start fade out animation
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    // Hide component completely
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`welcome-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="welcome-card">
        <div className={`welcome-text ${showText ? 'show' : ''}`}>
          <h1 className="main-title">Welcome to my portfolio</h1>
          <p className="sub-title">Crafting digital experiences</p>
        </div>
      </div>
    </div>
  );
};

export default CustomWelcome;