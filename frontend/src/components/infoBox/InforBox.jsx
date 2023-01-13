import React from 'react';
import "./InfoBox.scss";

const InforBox = ({ bgColor, title, count, icon }) => {
  return (
    <section className={`infor-box ${bgColor}`}>
        <span className='info-icon'> {icon} </span>
        <span className='info-text'> {title} <h4> {count} </h4> </span>
    </section>
  )
}

export default InforBox;