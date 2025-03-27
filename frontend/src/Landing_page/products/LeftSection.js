import React from 'react'

export default function LeftSection({
  imageURL,
  productName, 
  productDescription, 
  tryDemo, 
  LeanMore, 
  googlePlay, 
  appStore,
}) {
  return (
    <>
        <div className="row mt-5 pt-5 p-4 border-top">
          <div className="col-lg-8 col-md-12 text-center" style={{margin:"0 auto"}}>
            <img src={imageURL} alt="" width="60%"/>
          </div>
          <div className="col-lg-4 col-md-12 pt-5 fs-5" style={{alignContent:"center"}}>
            <h1>{productName}</h1>
            <p>{productDescription}</p>
           <div className='mb-3'>
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
            <a href={LeanMore} style={{marginLeft:"80px",textDecoration:"none"}}>Learn More</a>
           </div>
           <div>
            <a href={googlePlay} className='me-5'><img src="media/googlePlayBadge.svg"/></a>
            <a href={appStore}><img src="media/appStoreBadge.svg"/></a>
           </div>
          </div>
        </div>
    </>
  );
}
