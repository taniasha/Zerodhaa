import React from 'react'
import { Link } from 'react-router-dom'
export default function Hero() {
  return (
    <>
    <main>
      <div className=" mt-2 text-center p-5" >
        <div className="row text-center p-2">
           <img src="media/landing.png" alt="hero img" className='mb-5' style={{width:"80%",margin: "0 auto"}}/>
           <h1 className='mt-3 fw-bold'>Invest in everything</h1>
           <p className="fs-5 mb-4">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <Link to={"/signup"}> <button className='p-2 btn btn-primary fs-5 mb-4' style={{width:"20%",margin:"0 auto"}}>Signup Now</button></Link>
        </div>
      </div>
    </main>
    </>
  )
}
