import React from "react";

export default function Stats() {
  return (
    <>
      <div className=" mb-5 pb-4">
        <div className="row py-0 mb-5">
          <div className="col-lg-6 p-5 col-sm-12 col-md-6">
            <h1 className="fs-2 mb-3">Trust with confidence</h1>
            <h2 className="fs-4 text-muted">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>

            <h2 className="fs-4  text-muted">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>

            <h2 className="fs-4  text-muted">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>

            <h2 className="fs-4  text-muted">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6 " style={{alignContent:"center"}}>
            <img src="media/ecosystem.png" alt="" style={{ width: "90%"}} />
            <div className="text-center ">
              <a href="" className="mx-5" style={{ textDecoration: "none" }}>
                Explore our products <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href="" style={{ textDecoration: "none" }}>
                Try Kite demo <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
