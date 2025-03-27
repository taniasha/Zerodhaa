import React from 'react'

export default function LeftSection({
  imageURL,
  productName, 
  productDescription, 
  tryDemo, 
}) { return(
     <>
          <div className="row mt-5 pt-5 border-top p-4">
          <div className="col-lg-4 col-sm-12 pt-5 fs-5" style={{alignContent:"center"}}>
            <h1>{productName}</h1>
            <p>{productDescription}</p>
           <div className='mb-3'>
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
           </div>
          </div>
          <div className="col-lg-8 col-sm-12 text-center" style={{margin:"0 auto"}}>
            <img src={imageURL} alt="" width="60%"/>
          </div>
        </div>
     </>
);
}
