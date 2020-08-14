import React from "react"
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
 
function About(props) {
  return (
    <Route>
    <div id="section" class="container-fluid">
    <div class="row">
        <div class="col-9 mt-4 p-3">
            <h1>About Me</h1>
            <hr />
        <div className="holder">
            <img src="../../images/mehalftone.png" alt="Image of myself" class="aboutImage mr-4 " />
            <p className="text">Sarah Ferguson is a multimedia artist and coder living in the Orlando area. She most recently worked for Disney Creative Group as a 3D artist within the merchandising department. Previously, Sarah received an MFA in digital art from Louisiana State University where she focused on creating art that combined technology and traditional media. 
            </p>
            <p className="text">As a current student in UCF’s coding bootcamp, Sarah is learning full stack development and broadening her coding abilities. This portfolio contains examples of work done for the bootcamp. Projects were done using the Bootstrap Framework, Javascript, JQuery, HTML and CSS. 
              <br />
            
              407-489-1460 | <a href ="mailto: sarahlferguson07@gmail.com">sarahlferguson07@gmail.com</a>
            </p>
            <p className="text">
              <a href="https://github.com/saarahah">Github</a>
              <a href="https://www.linkedin.com/in/sarah-ferguson-2685401ab">| LinkedIn |</a>
              <a href="https://drive.google.com/file/d/1t9cksVL03TtbtnHX3wP_eJWfZagNY9k9/view?usp=sharing">Resume</a>
            </p>
            
          </div>
        </div>
    </div>
  </div>
  </Route>
  )
}
 
export default About;