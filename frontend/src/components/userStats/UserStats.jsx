import React from "react";
import InforBox from "../infoBox/InforBox";
import "./UserStats.scss";
import { FaUsers, FaUserCheck, FaUserMinus, FaUserTimes } from "react-icons/fa";

// Icons
const icon1 = <FaUsers color="green" size={40} />;
const icon2 = <FaUserCheck color="green" size={40} />;
const icon3 = <FaUserMinus color="green" size={40} />;
const icon4 = <FaUserTimes color="green" size={40} />;

const UserStats = () => {
  return (
    <section className="user-summary">
      <h2 className="user-title"> User Statatistics </h2>

      <div className="infor-summary">
        <InforBox
          icon={icon1}
          title={"Total Users"}
          count={"2"}
          bgColor={"cart1"}
        />

        <InforBox
          icon={icon2}
          title={"Verified Users"}
          count={"2"}
          bgColor={"cart2"}
        />

        <InforBox
          icon={icon3}
          title={"Unverified Users"}
          count={"2"}
          bgColor={"cart3"}
        />

        <InforBox
          icon={icon4}
          title={"Suspended Users"}
          count={"2"}
          bgColor={"cart4"}
        />
      </div>
    </section>
  );
};

export default UserStats;
