import React from 'react'

export default function Pricing() {
  return (
    <>
       <div className="container p-3">
        <div className="row">
           <div className="col-lg-4 col-sm-12 mb-5">
            <h1 className='mb-3'>Unbeatable pricing</h1>
            <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a href="" style={{ textDecoration: "none"}}>
                See pricing <i class="fa-solid fa-arrow-right"></i>
              </a>
           </div>
           <div className="col-2"></div>
           <div className="col-lg-6 col-sm-12">
              <div className="row text-center">
                <div className="col-lg-6 col-sm-12 p-2 border">
                  <h1 className='mb-3'>₹0</h1>
                  <p>Free equity delivery
                  and direct mutual funds</p>
                </div>
                <div className="col-lg-6 col-sm-12 p-2 border">
                <h1 className='mb-3'>₹20</h1>
                  <p>ntraday and F&O</p>
                </div>
              </div>
           </div>
        </div>
       </div>
    </>
  )
}
