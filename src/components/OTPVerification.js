import React, { useState } from "react";
import Select from "react-select";
import logo from "../assets/company_logo.jpg";

export default function OTPVerification({ onVerify }) {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isVerified, setIsVerified] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState({
        code: "+91",
        label: "🇮🇳 India",
    });

    const countryOptions = [
        { value: "IN", code: "+91", label: "🇮🇳 India" },
        { value: "US", code: "+1", label: "🇺🇸 USA" },
        { value: "UK", code: "+44", label: "🇬🇧 UK" },
        { value: "JP", code: "+81", label: "🇯🇵 Japan" },
        { value: "AU", code: "+61", label: "🇦🇺 Australia" },
    ];

    const handlePhoneChange = (e) => {
        setPhone(e.target.value.replace(/\D/g, ""));
    };

    const sendOtp = () => {
        if (phone.length === 10) {
            alert(`OTP sent to ${selectedCountry.code}${phone}.`);
            setIsOtpSent(true);
        } else {
            alert("Enter a valid 10-digit phone number.");
        }
    };

    if (isOtpSent) {
        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h2 style={{ fontSize: "16px" }}>Enter OTP</h2>
                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    style={{ padding: "10px", borderRadius: "5px" }}
                />
                <br />
                <br />
                <button
                    onClick={() => {
                        if (/^\d{6}$/.test(otp)) {
                            setIsVerified(true);
                            alert("OTP Verified Successfully!");
                            onVerify();
                        } else {
                            setIsVerified(false);
                            alert("Invalid OTP. Please enter a 6-digit OTP.");
                        }
                    }}
                    style={{
                        backgroundColor: "#28a745",
                        color: "white",
                        padding: "12px 25px",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "14px",
                        fontWeight: "bold",
                        transition: "background-color 0.3s, transform 0.2s",
                    }}
                    onMouseOver={(e) =>
                        (e.target.style.transform = "scale(1.05)")
                    }
                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                >
                    Verify OTP
                </button>
            </div>
        );
    }

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <div>
                <img src={logo} style={{ width: "75px" }} alt="Company Logo" />
            </div>
            <h2 style={{ fontSize: "16px" }}>Welcome to Fabzen Technology</h2>

            <p
                style={{
                    fontSize: "12px",
                    color: "blue",
                    fontWeight: "bold",
                    marginRight: "270px",
                }}
            >
                Select Country Code
            </p>
            <Select
                options={countryOptions}
                getOptionLabel={(e) => (
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <span>{e.label}</span>
                        <span style={{ marginLeft: 5 }}>({e.code})</span>
                    </div>
                )}
                value={selectedCountry}
                onChange={setSelectedCountry}
            />

            <br />
            <p
                style={{
                    fontSize: "12px",
                    color: "blue",
                    fontWeight: "bold",
                    marginRight: "200px",
                }}
            >
                Enter Registered Mobile Number
            </p>
            <input
                type="text"
                placeholder="1234567890"
                value={phone}
                onChange={handlePhoneChange}
                maxLength={10}
                style={{
                    padding: "10px",
                    borderRadius: "10px",
                    width: "350px",
                    marginLeft: "-5px",
                }}
            />
            <br />
            <br />

            <button
                onClick={sendOtp}
                disabled={phone.length !== 10}
                style={{
                    backgroundColor:
                        phone.length === 10 ? "#191970" : "#808080",
                    color: "white",
                    padding: "12px 25px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: phone.length === 10 ? "pointer" : "not-allowed",
                    fontSize: "14px",
                    fontWeight: "bold",
                    transition: "background-color 0.3s, transform 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
                Send OTP
            </button>
        </div>
    );
}
