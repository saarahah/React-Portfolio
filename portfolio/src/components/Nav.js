import React from "react"
import { BrowserRouter, Route, Link } from 'react-router-dom'; 

function Nav(props) {
    return (

        // <Link to="/" className="item">About</Link>

        <nav className="navbar navbar-expand navbar-light">
        <div className="container-fluid">
          <Link id="header" className="navbar-brand text-white" to="/">Sarah Ferguson</Link>
            <div  className="navbar-nav justify-content-end">
              <div id="bottomNav" className="container">
              <Link className="nav-item nav-Link" to="/">About <span className="sr-only">(current)</span></Link>
              <p>|</p>
              <Link className="nav-item nav-Link" to="/projects">Portfolio</Link>
              <p>|</p>
              <Link className="nav-item nav-Link" to="/contact">Contact</Link>          
            </div>
            </div>
        </div>
      </nav>
    )
  }
   
  export default Nav;