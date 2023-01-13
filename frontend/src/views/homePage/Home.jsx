import React from "react";
import Header from "../../components/header/Header";
import "./Home.scss";
import loginImage from "../../assets/loginImage.webp"

const Home = () => {
  return (
    <main className="home-page">
      <section className="home-container user">
        <article className="user-text">
          <h2 className="home-title">MERN Stack</h2>
          <p className="home-paragraph">
            MERN is one of several variations of the MEAN stack (MongoDB Express
            Angular Node), where the traditional Angular.js front-end framework
            is replaced with React.js. Other variants include MEVN (MongoDB,
            Express, Vue, Node), and really any front-end JavaScript framework
            can work.
          </p>

          <p className="home-paragraph">
            Ready to take the next step? Set up your free Atlas account by
            clicking below and try our MERN Stack Tutorial to create a
            full-stack MERN application in no time.
          </p>

          <div className="home-btns">
            <button className="home-register-btn"> Register </button>
            <button className="home-login-btn"> Login </button>
          </div>
        </article>
        <figure className="user-image">
          <img src={loginImage} alt="Login images" className="image" />
        </figure>
      </section>
    </main>
  );
};

export default Home;
