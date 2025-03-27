import React from 'react'

export default function Hero() {
  return (
    <>
    <div className="container my-5 py-5 border-bottom text-muted text-center">
        <div className="row my-5 pb-5">
            <h1 style={{fontSize:"50px"}}>Charges</h1>
            <h5>List of all charges and taxes</h5>
        </div>
        <div className="row">
            <div className="col-lg-4">
               <img src="media/pricing0.svg" width="70%"/>
               <h2>Free equity delivery</h2>
               <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col-4">
               <img src="media/intradayTrades.svg" width="70%"/>
               <h2>Intraday and F&O trades</h2>
               <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col-4">
               <img src="media/pricing0.svg" width="70%"/>
               <h2>Free direct MF</h2>
               <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>

    </div>
      
    </>
  )
}
