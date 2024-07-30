import React, { useState } from "react";
import { Container } from "react-bootstrap";
import UIButton from "../components/UIButton";
import { Link } from "react-router-dom";

function Otp() {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.disabled = false;
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
        e.target.disabled = true;
        setOtp([...otp.map((d, idx) => (idx === index - 1 ? "" : d))]);
      }
    } else {
      setOtp([...otp.map((d, idx) => (idx === index ? "" : d))]);
    }
  };
  return (
    <Container className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-7xl font-bold mb-5 text-center">Verify OTP</h1>
      <p className="text-center">Your code was sent to you via email</p>
      <div className="flex space-x-2 my-4">
        {otp.map((data, index) => {
          return (
            <input
              className="w-10 h-10 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="text"
              name="otp"
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={(e) => e.target.select()}
              disabled={index != 0}
            />
          );
        })}
      </div>
      <div className="flex justify-center my-3">
        <UIButton className="w-full" variant="primary" size="lg" type="button">
          Change Email
        </UIButton>
      </div>
      <p className="text-center mt-2">
        Didn&apos;t receive code?{" "}
        <Link className="text-blue-600 hover:underline">Request again</Link>
      </p>
    </Container>
  );
}

export default Otp;
