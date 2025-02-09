import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  // State for email input and its validity
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [emailExists, setEmailExists] = useState(true);

  // State for password input and its validity
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    number: false,
    uppercase: false,
    specialChar: false,
  });

  const [allValid, setAllValid] = useState(false); // To track if all conditions are met

  // Regular expression for basic email format validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Handle email input change and validate
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Validate email format
    if (emailRegex.test(value)) {
      setIsValidEmail(true);

      // Simulate an email existence check
      setTimeout(() => {
        setEmailExists(value !== "test@example.com"); // Simulated check
      }, 1000);
    } else {
      setIsValidEmail(false);
    }
  };

  // Password validation checks
  const validatePassword = (password) => {
    const validations = {
      length: password.length >= 8,
      number: /[0-9]/.test(password),
      uppercase: /[A-Z]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    setPasswordValidations(validations);

    // Check if all conditions are met
    const allValid = Object.values(validations).every((val) => val === true);
    setAllValid(allValid); // Set the state to true when all conditions are satisfied
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="parent-container">
      <h1 className="heading">SIGNUP</h1>
      <div className="form-container">
        <form action="">
          {/* Username Input */}
          <div className="input-box">
            <input
              type="text"
              name="username"
              id="username"
              placeholder=" "
              required
            />
            <label htmlFor="username">USERNAME</label>
          </div>

          {/* Email Input with Real-time Validation */}
          <div className="input-box">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder=" "
              required
              className={isValidEmail && emailExists ? "valid" : "invalid"}
            />
            <label htmlFor="email">EMAIL</label>
            {!isValidEmail && (
              <span className="error-message">Invalid email format</span>
            )}
            {!emailExists && (
              <span className="error-message">Email already exists</span>
            )}
          </div>

          {/* Password Input with Visibility Toggle */}
          <div className="input-box" style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder=" "
              required
            />
            <label htmlFor="password">PASSWORD</label>
            <i
              className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "cyan",
                fontSize: "20px",
              }}
            ></i>
          </div>

          {/* Password Validation List with Animation */}
          {password && !allValid && (
            <div className="password-validation">
              <ul>
                <li
                  className={`${
                    passwordValidations.length ? "valid" : "invalid"
                  } ${allValid ? "hidden" : ""}`}
                >
                  {passwordValidations.length ? (
                    <span className="tick">✔️</span>
                  ) : (
                    <span className="cross">❌</span>
                  )}
                  At least 8 characters
                </li>
                <li
                  className={`${
                    passwordValidations.number ? "valid" : "invalid"
                  } ${allValid ? "hidden" : ""}`}
                >
                  {passwordValidations.number ? (
                    <span className="tick">✔️</span>
                  ) : (
                    <span className="cross">❌</span>
                  )}
                  At least one number
                </li>
                <li
                  className={`${
                    passwordValidations.uppercase ? "valid" : "invalid"
                  } ${allValid ? "hidden" : ""}`}
                >
                  {passwordValidations.uppercase ? (
                    <span className="tick">✔️</span>
                  ) : (
                    <span className="cross">❌</span>
                  )}
                  At least one uppercase letter
                </li>
                <li
                  className={`${
                    passwordValidations.specialChar ? "valid" : "invalid"
                  } ${allValid ? "hidden" : ""}`}
                >
                  {passwordValidations.specialChar ? (
                    <span className="tick">✔️</span>
                  ) : (
                    <span className="cross">❌</span>
                  )}
                  At least one special character
                </li>
              </ul>
            </div>
          )}

          <button type="submit" className="submit-btn">
            SIGNUP
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
