import React from 'react'

export default function CreateTicket() {
  return (
    <>
      <div className="container p-3 mb-5">
        <div className="row text-muted my-5">
            <h3>To create a ticket, select a relevant topic</h3>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <h5 className='mb-4'><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h5>
                <ul className="text-muted" style={{listStyleType:"none",lineHeight:"1.8"}}>
                    <li>Resident individual</li>
                    <li>Minor</li>
                    <li>Non Resident Indian</li>
                    <li>Company, Partnership, HUF and LLP</li>
                    <li>Glossary</li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <h5 className='mb-4'><i class="fa-solid fa-user-tie"></i>  Your Zerodha Account</h5>
                <ul className="text-muted" style={{listStyleType:"none",lineHeight:"1.8"}}>
                    <li>Your Profile</li>
                    <li>Account modification</li>
                    <li>CMR</li>
                    <li>Company, Partnership, HUF and LLP</li>
                    <li>Nomination</li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <h5 className='mb-4'><i class="fa-solid fa-land-mine-on"></i>  Kite</h5>
                <ul className="text-muted" style={{listStyleType:"none",lineHeight:"1.8"}}>
                    <li>IPO</li>
                    <li>Trading FAQs</li>
                    <li>Charts and orders</li>
                    <li>Alerts and nudges</li>
                    <li>Generals</li>
                </ul>
            </div>
        </div>
      </div>
      
    </>
  )
}
