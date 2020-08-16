import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import "../styles/styles.css"

const styleObj = {float: "left",
  height: "10%",
  width: "10%",
  width: "fit-content",
  objectFit: "cover",
  objectPosition: "top" }
 
class About extends Component {

  render() { 

  return (


    <div id="section" className="container-fluid">
    <div className="row">
        <div className="col-9 mt-4 p-3">
            <h1>About Me</h1>
            <hr />
        <div className="holder">

        <img src={require("./images/mehalftone.png")} 
        className="aboutImage mr-4"
          alt="me" />

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
  )
}
}
 
export default About;