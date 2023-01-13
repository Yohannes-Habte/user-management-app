import React from 'react';
import "./Verify.scss";

const Verify = () => {
  return (
    <main className='verify-page'>
        <section className='verify-container'>
            <h2 className='verify-title'> Account Verification </h2>
            <p className='verify-paragraph'> To verify your accoount, click the verify account button below. </p>
            <button className='verify-btn'> Verify Account </button>
        </section>
    </main>
  )
}

export default Verify;