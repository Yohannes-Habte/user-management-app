import React, { useState } from "react";
import "./Forgot.scss";
import { AiTwotoneMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Forgot = () => {
  // State Variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle input form change
  const handleInputChange = (event) => {};

  return (
    <main className="forgot-page">
      <section className="forgot-container">
        <figure className="icon-container">
          <AiTwotoneMail className="forgot-icon" />
        </figure>
        <h2 className="forgot-title"> Forgot Password </h2>

        <form action="" className="forgot-form">
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

          <button type="submit" className="forgot-form-btn">
            Get Reset Email
          </button>

          <div className="forgot-home-login">
            <Link to="/" className="forgot-home">
              ᗕ Home
            </Link>
            <Link to="/login" className="forgot-login">
              ➤ Login
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Forgot;
