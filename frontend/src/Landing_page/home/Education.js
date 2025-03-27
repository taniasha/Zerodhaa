import React from "react";

export default function Education() {
  return (
    <>
      <div className="container py-5">
        <div className="row p-2">
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <img src="media/education.svg" style={{ width: "90%" }} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
            <h1 className="mb-3 fs-2 ">Free and open market education</h1>
            <p className="mb-2">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="" className="mb-5 pb-5 fs-5" style={{ textDecoration: "none" }}>
              Varsity <i class="fa-solid fa-arrow-right"></i>
            </a>
            <p className="">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="" className="fs-5" style={{ textDecoration: "none" }}>
              TradingQ&A<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
