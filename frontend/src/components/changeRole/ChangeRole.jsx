import React, { useState } from "react";
import "./ChangeRole.scss";
import { FaCheckSquare } from "react-icons/fa";

const ChangeRole = () => {
  // State variables
  const [userRole, setUserRole] = useState("");
  return (
    <div className="change-role">
      <form action="" className="change-role-form">
        <select
          name="userRole"
          id="userRole"
          onChange={(e) => setUserRole(e.target.value)}
          value={userRole}
          className="change-role-select"
        >
          <option value="default"> --Select -- </option>
          <option value="subscriber"> Subscriber </option>
          <option value="admin"> Admin </option>
          <option value="author"> Author </option>
          <option value="suspended"> Suspended </option>
        </select>
        <button className="change-role-btn">
          <FaCheckSquare className="change-role-icon"/>
        </button>
      </form>
    </div>
  );
};

export default ChangeRole;
