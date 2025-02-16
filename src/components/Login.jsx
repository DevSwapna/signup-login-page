import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Regular expression for basic email format validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Handle email input change and validate
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(emailRegex.test(value));
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <h1 className="heading">LOGIN</h1>
      <div className="form-container">
        <form action="">
          {/* Email Input */}
          <div className="input-box">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder=" "
              required
              className={isValidEmail ? "valid" : "invalid"}
            />
            <label htmlFor="email">EMAIL</label>
            {!isValidEmail && (
              <span className="error-message">Invalid email format</span>
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
                right: "0.5px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "cyan",
                fontSize: "20px",
              }}
            ></i>
          </div>

          <button type="submit" className="submit-btn">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
