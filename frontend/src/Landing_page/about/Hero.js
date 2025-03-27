import React from "react";

export default function Hero() {
  return (
    <>
      <div className="container text-center text-muted mt-5 pt-5">
        <h1>We pioneered the discount broking model in India.</h1>
        <h1 className="mb-5 pb-5">Now, we are breaking ground with our technology.</h1>

       
        <div className="row mt-3 pt-5 border-top" style={{textAlign:"left",lineHeight:"1.8",fontSize:"18px"}}>
            <div className="col-lg-6 col-sm-12">
                <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
            </div>
            <div className="col-lg-6 col-sm-12">
                <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                <p><span className="text-primary">Rainmatter</span>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
            </div>
        </div>
      </div>
      
    </>
  );
}
