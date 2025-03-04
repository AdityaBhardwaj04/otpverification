import React, { useState } from 'react';
import './App.css';
import OTPVerification from './OTPVerification';
import backgroundImage from './assets/withoutbackground.png'; // First image as background
// import particleImage from './assets/animationimg2.jpg'; // Second image as particle
import celebrationGif from './assets/celebration.gif'; // Celebration GIF

function App() {
  const [showCelebration, setShowCelebration] = useState(false);

  // Function to handle image click
  const handleImageClick = () => {
    setShowCelebration(true); // Show the celebration GIF
    setTimeout(() => setShowCelebration(false), 3000); // Hide the GIF after 3 seconds
  };
    
  return ( 
    <div className="app-container"> 
      <div className="grid-container">
        {/* Left Half: Images */}
        <div className="image-section" onClick={handleImageClick}>
          <img src={backgroundImage} alt="Background" className="background-image" />

          {showCelebration && (  
            <div className="celebration-popup">
              <img src={celebrationGif} alt="Celebration" className="celebration-gif" />
            </div>
          )}
        </div>

        {/* Right Half: OTP Verification*/}               
         {/* <div style={{ marginTop: "100px" }}>  */}  
          <div className="otp-section">
            <OTPVerification />
          </div>
        </div>
      </div> 
    // </div>
  );
}
 
export default App;
