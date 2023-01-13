import React, { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../../../components/passwordInput/PasswordInput";
import "./Reset.scss";
import { MdPassword } from "react-icons/md";

// Initial States of the variables
const initialStatte = {
  password: "",
  confirmPassword: "",
};
const Reset = () => {
  // State Variables
  const [formData, setFormData] = useState(initialStatte);
  const { password, confirmPassword } = formData;

  // Function to handle input form change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <main className="reset-password-page">
      <section className="reset-password-container">
        <figure className="icon-container">
          <MdPassword className="reset-password-icon" />
        </figure>
        <h2 className="reset-password-title"> Reset Password </h2>

        <form action="" className="reset-password-form">
          <PasswordInput
            name="password"
            onChange={handleInputChange}
            value={password}
            placeholder="New Password"
          />

          <PasswordInput
            name="confirmPassword"
            onChange={handleInputChange}
            value={confirmPassword}
            placeholder="Confirm New Password"
          />

          <button type="submit" className="reset-password-form-btn">
            Reset Password
          </button>

          <div className="reset-password-home-login">
            <Link to="/" className="reset-password-home">
              ᗕ Home
            </Link>
            <Link to="/login" className="reset-password-login">
              ➤ Login
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Reset;
