import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginCode.scss";
import { MdOutlineAccessibility } from "react-icons/md";

const LoginCode = () => {
  const [loginCode, setLoginCode] = useState("");

  // Function to handle input form change
  const handleInputChange = (event) => {};
  return (
    <main className="loginCode-page">
      <section className="loginCode-container">
        <figure className="icon-container">
          <MdOutlineAccessibility className="loginCode-icon" />
        </figure>
        <h2 className="loginCode-title"> Enter Access Code </h2>

        <form action="" className="loginCode-form">
          <div className="input-container">
            <input
              type="text"
              name="loginCode"
              onChange={(e) => setLoginCode(e.target.value)}
              value={loginCode}
              required
              placeholder="Access Code "
              className="input"
            />
          </div>

          <button type="submit" className="loginCode-form-btn">
            Proceed to Login
          </button>
          <p className="loginCode-check-email"> Check your email for login access code! </p>

          <div className="loginCode-home-resend-code">
            <p>
              <Link to="/" className="loginCode-home">
                ᗕ Home
              </Link>
            </p>
            <p className="loginCode-resend-code">
              <b>Resetd Code </b>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default LoginCode;
