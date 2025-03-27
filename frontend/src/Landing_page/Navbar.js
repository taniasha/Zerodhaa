import React from "react";
import { NavLink ,Link} from "react-router-dom";

import '../index.css';
export default function Navbar() {
  return (
    <>
        <nav class="navbar navbar-expand-lg border-bottom bg-white">
          <div class="container-fluid p-2" style={{backgroundColor:"#fff"}}>
               <Link class="navbar-brand" to={"/"}>
               <img src="media/logo.svg" alt="" style={{width:"25%"}}/>
              </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li class="nav-item">
                  <Link class="nav-link " aria-current="page" to={"/signup"}>
                    Signup
                  </Link>
                </li> */}
                <li class="nav-item">
                  <Link class="nav-link" to={"/about"}>
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/products"}>
                    Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/pricing"}>
                    Pricing
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/support"}>
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  );
}
