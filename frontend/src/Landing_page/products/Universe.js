import React from 'react'

export default function Universe() {
  return (
    <>
      <div className='text-center mt-5 py-5 mb-5 text-muted'>
         <h1>The Zerodha Universe</h1>
         <p>Extend your trading and investment experience even further with our partner platforms</p>
      </div>
       <div className="container text-center mb-5">
        <div className="row" style={{alignContent:"center"}}>
            <div className="col-lg-4 col-md-6 col-sm-12 p-4 ">
              <img src="media/smallcaselogo.png" width="50%"/>
              <p>Systematic trading platform that allows you to create and backtest </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 p-4">
            <img src="media/zerodhaFundhouse.png" width="50%" />
            <p>Systematic trading platform that allows you to create and backtest </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 p-4" >
            <img src="media/streakLogo.png" width="50%"/>
            <p>Systematic trading platform that allows you to create and backtest </p>
            </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 p-4">
            <img src="media/sensibullLogo.svg" alt="" />
            <p>Systematic trading platform </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-4">
            <img src="media/dittoLogo.png" width="30%" />
            <p>Systematic trading platform </p>
          </div>
          <div className="col-4"></div>
        </div>
       </div>
    </>
  )
}
