import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCheck, FaTimes } from "react-icons/fa";
import { BsCheck2All } from "react-icons/bs";
import "./Register.scss";
import PasswordInput from "../../../components/passwordInput/PasswordInput";
import { useEffect } from "react";

// Initial States of the variables
const initialStatte = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Register = () => {
  // State Variables
  const [formData, setFormData] = useState(initialStatte);
  const { fullName, email, password, confirmPassword } = formData;

  // Function to handle input form change
  const handleInputChange = (event) => {
    // You target the name and value in the input form
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // State variables that shows the condition of the password requirements
  const [letterCase, setLetterCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [specialCharacter, setSpecialCharacter] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);

  // Password strength checker icons
  const timesIcon = <FaTimes color="red" size={15} />;
  const checkIcon = <BsCheck2All color="green" size={15} />;

  // Function to switch icon
  const switchIcon = (condition) => {
    if (condition) {
      return checkIcon;
    } else {
      return timesIcon;
    }
  };

  // Function that check whether the condition is meet or not
  useEffect(() => {
    // Check for uppercase and lowercase letters
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setLetterCase(true);
    } else {
      setLetterCase(false);
    }

    // Check for numbers
    if (password.match(/([0-9])/)) {
      setNumber(true);
    } else {
      setNumber(false);
    }

    // Check for special character
    if (password.match(/([!,%,@,#,^,*,?,_,~])/)) {
      setSpecialCharacter(true);
    } else {
      setSpecialCharacter(false);
    }

    // Check for password length
    if (password.length > 5) {
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }
  }, [password]);

  return (
    <main className="register-page">
      <section className="register-container">
        <figure className="icon-container">
          <FaUserCheck className="register-icon" />
        </figure>
        <h2 className="register-title"> Register </h2>

        <form action="" className="register-form">
          <div className="input-container">
            <input
              type="text"
              name="fullName"
              onChange={handleInputChange}
              value={fullName}
              required
              placeholder="Full Name"
              className="input"
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              value={email}
              required
              placeholder="Email"
              className="input"
            />
          </div>

          <PasswordInput
            name="password"
            onChange={handleInputChange}
            value={password}
            placeholder="Password"
          />

          <PasswordInput
            name="confirmPassword"
            onChange={handleInputChange}
            value={confirmPassword}
            placeholder="Confirm Password"
          />

          {/* Password strenght assessment */}
          <ul className="password-checkbox">
            <li>
              <span className="indicator">
                {
                  /* {upperCase ? checkIcon : timesIcon}*/ switchIcon(
                    letterCase
                  )
                }
                &nbsp; Lowercase & UpperCase
              </span>
            </li>

            <li>
              <span className="indicator">
                {switchIcon(number)} &nbsp; Number (0-9)
              </span>
            </li>

            <li>
              <span className="indicator">
                {switchIcon(specialCharacter)} &nbsp; Spceial Character
                (!%@#^*?_~)
              </span>
            </li>

            <li>
              <span className="indicator">
                {switchIcon(passwordLength)} &nbsp; Minimum 6 Characters
              </span>
            </li>
          </ul>

          <button type="submit" className="login-form-btn">
            Register
          </button>
        </form>

        <span className="register-span">
          <Link to="/"> Home </Link>
          <p> Already have an account? </p>
          <Link to="/login" className="register-login">
            Login
          </Link>
        </span>
      </section>
    </main>
  );
};

export default Register;
