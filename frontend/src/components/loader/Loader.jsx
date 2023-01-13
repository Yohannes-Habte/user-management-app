import React from "react";
import "./Loader.scss";
import ReactDOM from "react-dom";
import loaderImage from "../../assets/loader.gif";
import { AiFillAccountBook, AiOutlineFunction } from "react-icons/ai";

// This loader shows the waiting time before something is opened
const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <img src={loaderImage} alt="Loadding..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

// Loader for a specific component
export const Spinner = () => {
  return (
    <div className="specific-component-loader">
      <img src={loaderImage} alt="Loading..." />
    </div>
  );
};

export default Loader;
