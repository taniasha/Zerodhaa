import React from 'react'

export default function Hero() {
  return (
    <>
       <section className="p-3" id="supportHero">
         
        <div className="row fs-4 pt-5" id="supportWrapper">
            <div className="col-lg-6 col-sm-12">
               <h4>Support Portal</h4>
            </div>
            <div className="col-lg-6 col-sm-12" style={{textAlign:"end"}}>
                <a href="" style={{color:"white"}}>Track Tickets</a>
            </div>
        </div>
        <div className="row mt-5 mb-5">
            <div className="col-lg-8 col-sm-12 fs-5">
                <h4 className='mb-4 fs-2'>Search for an answer or browse help topics to create a ticket</h4>
                <a href="" >Track account opening</a><br/>
                <a href="" > Track segment activation</a><br/>
                <a href="" > Intraday margins</a><br/>
                <a href="">Kite user manual</a><br/>
            </div>
            <div className="col-lg-4 col-sm-12 fs-5">
                <h4 className='mt-4 mb-3'>Featured</h4>
                <a href="" className='me-4'>1. BSE StAR mutual fund platform downtime</a>
                <br/>
                <a href="" className='me-4'>2. Surveillance measure on scrips - March 2025</a>
            </div>
          </div>
       </section>
      
    </>
  )
}
