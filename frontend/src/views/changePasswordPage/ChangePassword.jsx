import React, { useState } from "react";
import Menu from "../../components/pageMenu/Menu";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import "./ChangePassword.scss";

// Initial state of the State Variables
const initialState = {
  oldPassword: "",
  newPassword: "",
  confirmNewPassword: "",
}
const ChangePassword = () => {
  const [ passwordData, setPasswordData ] = useState(initialState);
  const { oldPassword, newPassword, confirmNewPassword } = passwordData;

  // Function handle change password input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPasswordData({...passwordData, [name]: value })
  }


  return (
    <main className="change-password-page">
      <section className="change-password-container">
        <Menu />
        <h2 className="change-password-title"> Change Password </h2>

        <form action="password" className="change-password-form">
          <div className="label-input-ontainer">
            <label htmlFor="oldPassword"> Current Password: </label>
            <PasswordInput
              name="oldPassword"
              id="oldPassword"
              onChange={handleInputChange}
              value={oldPassword}
              placeholder="Current Password"
            />
          </div>

          <div className="label-input-ontainer">
            <label htmlFor="newPassword"> New Password: </label>
            <PasswordInput
              name="newPassword"
              id="newPassword"
              onChange={handleInputChange}
              value={newPassword}
              placeholder="New Password"
            />
          </div>

          <div className="label-input-ontainer">
            <label htmlFor="confirmNewPassword"> Confirm New Password: </label>
            <PasswordInput
              name="confirmNewPassword"
              id="confirmNewPassword"
              onChange={handleInputChange}
              value={confirmNewPassword}
              placeholder="Confirm New Password"
            />
          </div>
          <button className="hange-password-btn"> Change Password </button>
        </form>
      </section>
    </main>
  );
};

export default ChangePassword;
