
import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";
import logo from "./assets/company_logo.jpg"


export default function OTPVerification() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState({ code: "+91", label: "🇮🇳 India" });
  const [isHovered, setIsHovered] = useState(false);

  
  // Country options with flags
  const countryOptions = [
    { value: "IN", code: "+91", label: "🇮🇳 India"},
    { value: "US", code: "+1", label: "🇺🇸 USA" },
    { value: "UK", code: "+44", label: "🇬🇧 UK" },
    { value: "JP", code: "+81", label: "🇯🇵 Japan" },
    { value: "AU", code: "+61", label: "🇦🇺 Australia" },
  ]; 
  
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setPhone(value);
  };

  // const sendOtp = async () => {
  //   if (phone.length === 10) {
  //     try {
  //       const response = await axios.post("http://localhost:5000/send-otp", {
  //         phone: `${selectedCountry.code}${phone}`, // Use selected country code
  //       });
  //       alert(response.data.message);
  //       setIsOtpSent(true);
  //     } catch (error) {
  //       alert("Error sending OTP. Try again.");
  //     }
  //   } else {
  //     alert("Enter a valid 10-digit phone number.");
  //   }
  // };
  const sendOtp = () => {
    if (phone.length === 10) {
      alert(`OTP sent to ${selectedCountry.code}${phone}. `);
      setIsOtpSent(true); 
    } else {
      alert("Enter a valid 10-digit phone number.");
    }
  };

  // const verifyOtp = async () => {
  //   try {
  //     const response = await axios.post("http://localhost:5000/verify-otp", {
  //       phone: `${selectedCountry.code}${phone}`,
  //       otp,
  //     });

  //     if (response.data.success) {
  //       setIsVerified(true);
  //     } else {
  //       setIsVerified(false);
  //     }
  //   } catch (error) {
  //     setIsVerified(false);         
  //   }
  // };   
  const verifyOtp = () => {
    if (/^\d{6}$/.test(otp)) { // Check if OTP is exactly 6 digits
      setIsVerified(true);
      alert("OTP Verified Successfully!");
    } else {
      setIsVerified(false);
      alert("Invalid OTP. Please enter a 6-digit OTP.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
        <div>
            <img src={logo} style={{ width: "75px"}}/>
        </div>
      <h2 style={{ fontSize: "16px" }}>Welcome to Fabzen Technology</h2>
      <p style={{ fontSize: "12px" , color: "blue",fontWeight:"bold" ,marginRight: "270px"}}>  
    Select Country Code
  </p>
  
      {/* Country Code Dropdown */}
      {/* <Select
        options={countryOptions}   
        getOptionLabel={(e) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>{e.label}</span>
            <span style={{ marginLeft: 5 }}>({e.code})</span>
          </div>
        )}           
        value={selectedCountry}
        onChange={(selected) => setSelectedCountry(selected)}
      /> */}
{/* const ImageOverlay = [
  
    <div className="utk">
      <img src={background.jpg} alt="Background" className="background" />
      <img src={animation1img.jpg} alt="Overlay" className="overlay" />
    </div>
]; */}

<Select
  options={countryOptions}
  getOptionLabel={(e) => (
    <div style={{ display: "flex", alignItems: "center"}}>
      <img
        src={`/flags/${e.label.split(" ")[1]}.png`} // Extracts country name from label
        alt={e.label}
        style={{ width: 20, height: 15, marginRight: 5 }}
      />
      <span>{e.label}</span>
      <span style={{ marginLeft: 5 }}>({e.code})</span>
    </div>
  )}
  value={selectedCountry}
  onChange={(selected) => setSelectedCountry(selected)}
/>

<br /> <br />

      <p style={{ fontSize: "12px" , color: "blue",fontWeight:"bold" ,marginRight: "200px"}}>
    Enter Registered Mobile Number
  </p>
      {/* Phone Number Input */}    
      <input
        type="text"
        placeholder="1234567890"
        value={phone}
        onChange= {handlePhoneChange}
        maxLength={10}
        style={{ opacity: 155, padding: "10px", borderRadius: "10px", width: "350px", marginLeft: "-5px"}}
      />

      <br /><br /><br /> 
    <br />
      <button 
  onClick={sendOtp} 
  disabled={phone.length !== 10}
  style={{ backgroundColor: "#191970", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" , opacity: "0.6",
    transition: "0.3s", opacity: isHovered ? 1 : 0.6, cursor: phone.length==10? "pointer" : "not-allowed" , opacity:phone.length==10?(isHovered ? 1:0.6) : 0.6}}
    
  onMouseEnter={() => setIsHovered(true)} // Set hover state to true
  onMouseLeave={() => setIsHovered(false)}  
>
  Send OTP
</button>


      {isOtpSent && (
        <>
          <br /><br />
          <input 
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            style={{ padding: "10px", borderRadius: "5px" }}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}

      {isVerified === true && <p style={{ color: "green" }}>✅ OTP Verified!</p>}
      {isVerified === false && <p style={{ color: "red" }}>❌ Invalid OTP!</p>}
    </div>
  );
}

