import React from "react";

export default function Awards() {
  return (
    <>
      <div className="container p-2 mb-4">
        <div className="row">
          <div className="col-lg-6 col-sm-12 p-5 ">
            <img src="media/largestBroker.svg" alt="" style={{width:"80%"}} />
          </div>
          <div className="col-lg-6 col-sm-12 py-5 ">
            <h1>Largest stock broker in india</h1>
            <p className="mb-4">
              2+ million Zerodha clients contribute to over 15% of all retail
              order volumes in india daily by trading and investing in:
            </p>
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>
                    <p>Future and options</p>
                  </li>
                  <li>
                    <p>Commodity derivatives</p>
                  </li>
                  <li>
                    <p>Currency derivatives</p>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    <p>Stocks & IPOs</p>
                  </li>
                  <li>
                    <p>Direct nutual funds</p>
                  </li>
                  <li>
                    <p>Bonds and Govt. Securities</p>
                  </li>
                </ul>
              </div>
            </div>
            <img src="media/pressLogos.png" alt="logo" style={{width:"90%"}}/>
          </div>
        </div>
      </div>
    </>
  );
}
