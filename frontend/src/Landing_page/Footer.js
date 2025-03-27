import React from 'react'

export default function Footer() {
  return (
    <> 
       <div className=" border-top mt-2 p-5 bg-light" style={{color:"#808999"}}>
          <div className="row">
            <div className="col-lg-3 col-sm-12 mt-2">
              <img src="media/logo.svg" className='mb-4' alt="logo" style={{width:"75%"}} />
              <p className='mb-0'>© 2010 - 2025, Zerodha Broking Ltd.</p>
              <p>All rights reserved.</p>
              <a href="https://www.facebook.com/"><i class="fa-brands fa-square-facebook fs-4"></i></a>
              <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram fs-4 mx-4"></i></a>
              <a href=""><i class="fa-brands fa-linkedin-in fs-4"></i></a>
              <hr />
              <a href="https://www.youtube.com/"><i class="fa-brands fa-youtube fs-4"></i></a>
              <a href="https://web.whatsapp.com/"><i class="fa-brands fa-whatsapp fs-4 mx-3 "></i></a>
            </div>
            <div className="col-lg-3 col-sm-12 text-start">
              <h2 className='mb-4 fs-3'>Company</h2>
              <ul style={{listStyleType:"none"}}>
                <li>About</li>
                <li>Products</li>
                <li>Pricing</li>
                <li>Referral programme</li>
                <li>Carrers</li>
                <li>Zerodha.tech</li>
                <li>Open source</li>
                <li>Press & media</li>
                <li>Zerodha Cares (CSR)</li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-12 text-start">
                <h2 className='mb-4 fs-3'>Support</h2>
                <ul style={{listStyleType:"none"}}>
                  <li>Contact us</li>
                  <li>Support portal</li>
                  <li>Z-Connect blog</li>
                  <li>List of charges</li>
                  <li>Downloads & resources</li>
                  <li>Videos</li>
                  <li>Market overview</li>
                  <li>How to file a complaint?</li>
                  <li>Status of your complaints</li>
                </ul>
            </div>
            <div className="col-lg-3 col-sm-12">
              <h2 className='mb-4 fs-3'>Account</h2>
              <ul style={{listStyleType:"none"}}>
               <li >Open an account</li>
               <li>Fund transfer</li>
              </ul>
            </div> 
          </div>
          <p className='mt-5' style={{fontSize:"12px"}}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <span className='text-primary'>complaints@zerodha.com</span>, for DP related to <span className='text-primary'>dp@zerodha.com</span>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

          <p style={{fontSize:"12px"}}>Procedure to file a complaint on <span className='text-primary'>SEBI SCORES</span>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
       </div>
    
    </>
  )
}
