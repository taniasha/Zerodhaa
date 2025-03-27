import React from 'react';  
import ReactDOM from 'react-dom/client';  
import { BrowserRouter, Route, Routes } from 'react-router-dom';  
import "./index.css";  
import HomePage from './Landing_page/home/HomePage';  
import AboutPage from './Landing_page/about/AboutPage'
import Signup from './Landing_page/signup/Signup';
import ProductPage from './Landing_page/products/ProductPage';
import PricingPage from './Landing_page/pricing/PricingPage';
import SupportPage from './Landing_page/support/SupportPage';
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
import NotFound from './Landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(  
  <BrowserRouter>
    <Navbar/>  
      <Routes>  
        <Route path="/" element={<HomePage />} /> 
        {/* <Route path='/home' element */}
        <Route path="/about" element={<AboutPage/>}></Route> 
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/products" element={<ProductPage/>}></Route>
        <Route path="/pricing" element={<PricingPage/>}></Route>
        <Route path="/support" element={<SupportPage/>}></Route> 
        <Route path="*" element={<NotFound/>}></Route>     
      </Routes>  
    <Footer/>
  </BrowserRouter>  
);  

/* 1.  browserrouter is like a container for rounting jiske andar hume
       jitne bhi links h vo bnani hoti h. */
/* 2.  we have initialized navbar and footer outside the routes as 
       by doing this it will be accessible to all pages. */
