import React from 'react'

export default function Team() {
  return (
    <>

        <div className="container mt-5 p-4">
            <div className="row p-4 mb-4 border-top">
                <h1 className='fs-1  text-center'>People</h1>
            </div>
            
            <div className="row text-muted mb-5 text-center">
                <div className="col-lg-4 col-sm-12" style={{margin:"auto 0", textAlign:"center"}}>
                    <img src="media/nithinKamath.jpg" style={{borderRadius:"50%",width:"70%",textAlign:"center"}} alt="nithinKamath image" />
                    <h3>Nithin Kamth</h3>
                    <p>Founder, CEO</p>
                </div>
                <div className="col-lg-8 col-sm-12 fs-5">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p></p>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <img src="media/" alt="" />
                </div>
                <div className="col-4"></div>
                <div className="col-4"></div>
            </div>
        </div>
      
    </>
  )
}
