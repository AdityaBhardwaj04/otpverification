import React, { useState } from "react";
import "../App.css";
import OTPVerification from "../components/OTPVerification";
import Dashboard from "../pages/Dashboard"; // Dashboard component
import backgroundImage from "../assets/withoutbackground.png";
import celebrationGif from "../assets/celebration.gif";

function Homepage() {
    const [showCelebration, setShowCelebration] = useState(false);
    const [isVerified, setIsVerified] = useState(false); // Track OTP verification

    const handleImageClick = () => {
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 3000);
    };

    return (
        <div className="app-container">
            {isVerified ? (
                <Dashboard />
            ) : (
                <div className="grid-container">
                    {/* Left Half: Images */}
                    <div className="image-section" onClick={handleImageClick}>
                        <img
                            src={backgroundImage}
                            alt="Background"
                            className="background-image"
                        />
                        {showCelebration && (
                            <div className="celebration-popup">
                                <img
                                    src={celebrationGif}
                                    alt="Celebration"
                                    className="celebration-gif"
                                />
                            </div>
                        )}
                    </div>

                    {/* Right Half: OTP Verification */}
                    <div className="otp-section">
                        <OTPVerification onVerify={() => setIsVerified(true)} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Homepage;
