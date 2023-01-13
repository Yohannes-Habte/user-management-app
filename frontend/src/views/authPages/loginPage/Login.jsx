import React from "react";
import "./Login.scss";
import { IoMdLogIn } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../../../components/passwordInput/PasswordInput";

const Login = () => {
  // State Variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle input form change
  const handleInputChange = (event) => {};
  return (
    <main className="login-page">
      <section className="login-container">
        <figure className="icon-container">
          <IoMdLogIn className="login-icon" />
        </figure>
        <h2 className="login-title"> Login </h2>

        <div className="google-btn-container">
          <button className="google-btn"> Sign in with Google </button>
        </div>

        <p className="login-or"> Or </p>

        <form action="" className="login-form">
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

          <button type="submit" className="login-form-btn">
            Login
          </button>
        </form>

        <p className="forgot-password">
          <Link to="/forgot" className="link">
            Forgot Password?
          </Link>
        </p>

        <span className="login-span">
          <Link to="/"> Home </Link>
          <p> Don't have an account? </p>
          <Link to="/register" className="login-register">
            Register
          </Link>
        </span>
      </section>
    </main>
  );
};

export default Login;
