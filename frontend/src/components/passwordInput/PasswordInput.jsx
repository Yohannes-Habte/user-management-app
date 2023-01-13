import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./PasswordInput.scss";

const PasswordInput = ({ placeholder, name, value, onChange, onPaste }) => {
  // State variable
  const [showPassword, setShowPassword] = useState(false);

  // Function that changes from invisible to visible password and vice versa
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password">
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        onChange={onChange}
        value={value}
        required
        placeholder={placeholder}
        onPaste={onPaste}
        className="input"
      />
      <div onClick={handlePassword}>
        {showPassword ? (
          <AiFillEyeInvisible className="password-icon" />
        ) : (
          <AiFillEye className="password-icon" />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
