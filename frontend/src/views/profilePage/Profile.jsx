import React, { useState } from "react";
import ProfileImage from "../../assets/Yohannes.jpg";
import Menu from "../../components/pageMenu/Menu";
import "./Profile.scss";

// The initial state object
const initialState = {
  fullName: "",
  email: "",
  phone: "",
  bio: "",
  photo: "",
  role: "",
  isVerified: false,
};
const Profile = () => {
  const [profile, setProfile] = useState(initialState);
  // Function that handles image profile change
  const handleImageChange = () => {};

  return (
    <main className="profile-page">
      <section className="profile-container">
        <Menu />
        <h2 className="profile-title"> Profile </h2>

        <div className="profile-info">
          <figure className="profile-image-container">
            <img className="image" src={ProfileImage} alt="Profile Images" />
            <h3 className="profile-role"> Role: Admin </h3>
          </figure>

          <form action="" className="profile-form">
            <div className="label-input-ontainer">
              <label htmlFor="image"> Change Photo: </label>
              <input
                type="file"
                accept="image/*" /* This is used to accept all types of images*/
                name="image"
                id="image"
                onChange={handleImageChange}
              />
            </div>

            <div className="label-input-ontainer">
              <label htmlFor="fullName"> Full Name: </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={profile.fullName}
                onChange={handleImageChange}
              />
            </div>

            <div className="label-input-ontainer">
              <label htmlFor="email"> Email: </label>
              <input
                type="email"
                name="email"
                id="email"
                value={profile.email}
                onChange={handleImageChange}
                disabled /* This does not allow you to edit the email */
              />
            </div>

            <div className="label-input-ontainer">
              <label htmlFor="phone"> Email: </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={profile.phone}
                onChange={handleImageChange}
              />
            </div>

            <div className="label-input-ontainer">
              <label htmlFor="bio"> Biodata: </label>
              <textarea
                name="bio"
                id="bio"
                cols="30"
                rows="10"
                value={profile.bio}
                onChange={handleImageChange}
              ></textarea>
            </div>
            <button className="profile-btn"> Update Profile </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Profile;
