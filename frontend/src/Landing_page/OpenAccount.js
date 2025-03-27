import React from 'react';
import { Link } from 'react-router-dom';

export default function OpenAccount() {
  return (
    <>
        <div className="container mb-5">
          <div className="row text-center">
            {/* <img src="media/landing.png" alt="hero img" className='mb-5'/> */}
            <h1 className='mt-5'>Open a Zerodha account</h1>
            <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Link to={"/signup"} className='btn btn-primary fs-5' style={{width:"20%",margin:"0 auto"}}>Sign up for free</Link>
          </div>
       </div>
    </>
  )
};
