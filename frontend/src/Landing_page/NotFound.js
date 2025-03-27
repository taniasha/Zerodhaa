import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
       <div className="container mb-5">
          <div className="row text-center">
            <h1 className='mt-5'>404 Not Found</h1>
            <p className='fs-5 mb-4'>Sorry. the page you are looking for does not exist.</p>
            <Link className='btn btn-primary fs-5' to={"/"} style={{width:"15%",margin:"0 auto"}}>Go Home</Link>
          </div>
       </div>
    </>
  )
}
