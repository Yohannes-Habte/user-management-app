import React, { useState } from "react";
import ProfileImage from "../../assets/Yohannes.jpg";
import Menu from "../../components/pageMenu/Menu";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import "./Profile.scss";

// The initial state object
const initialState = {
  fullName: "",
  email: "",
  password: "",
  phone: "",
  bio: "",
  photo: "",
  role: "",
  isVerified: false,
};
const Profile = () => {
  const [profile, setProfile] = useState(initialState);
  const { fullName, email, password, phone, bio, photo } = profile;
  // Function that handles image profile change
  const handleImageChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

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
              <label htmlFor="photo"> Change Photo: </label>
              <input
                type="file"
                accept="image/*" /* This is used to accept all types of images*/
                name="photo"
                id="photo"
                value={photo}
                onChange={handleImageChange}
              />
            </div>

            <div className="label-input-ontainer">
              <label htmlFor="fullName"> Full Name: </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={fullName}
                onChange={handleImageChange}
              />
            </div>

            <div className="label-input-ontainer">
              <label htmlFor="email"> Email: </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleImageChange}
                //disabled /* This does not allow you to edit the email */
              />
            </div>

            <div className="label-input-ontainer">
              <label htmlFor="password"> Password: </label>
              <PasswordInput
                name="password"
                id="password"
                value={password}
                onChange={handleImageChange}
              />
            </div>

            <div className="label-input-ontainer">
              <label htmlFor="phone"> Phone: </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={phone}
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
                value={bio}
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
