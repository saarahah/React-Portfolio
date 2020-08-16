import React from "react";
import Thumbnail from "./Thumbnail.js"; // Import the Thumbnail component
import "../App";
import "../styles/style2.css"

function Projects(props) {

  return (
    <div id="section" className="container-fluid">
      <div className="row">
        <div class="col-9 mt-4 p-3">
          <h1>Portfolio</h1>
          <hr />
          <figure>
            <table className="imageTable">
              <tbody>
                <tr>
                  <th scope="col">
                    <div className="box">
                    <a href="https://quiet-meadow-99455.herokuapp.com/user/login">
                    <img src={require("./images/unheard.png")} 
                           alt="Unheard Stories" />
                           </a>
                   <div class ="text">
                     <h2>Unheard Stories</h2>
                     </div>
                   </div>
                   </th>
                

              
                   <th scope="col">
                    <div className="box">
                    <a href="https://saarahah.github.io/Javascript-Coding-Quiz-Homework">
                    <img src={require("./images/codequiz.PNG")} 
                           alt="Code Quiz" />
                           </a>
                   <div class ="text">
                     <h2>Code Quiz</h2>
                     </div>
                   </div>
                   </th>
                </tr>


                 <tr>
                   <th scope="col">
                    <div className="box">
                    <a href="https://boaardz56.github.io/Nightlife/">
                    <img src={require("./images/nightlife.PNG")} 
                           alt="Code Quiz" />
                           </a>
                   <div class ="text">
                     <h2>Nightlife</h2>
                     </div>
                   </div>
                   </th>

              
                  <th scope="col">
                    <div class="box">
                    <a href="https://protected-coast-08381.herokuapp.com/">
                    <img src={require("./images/cyburger.jpg")} 
                           alt="Code Quiz" />
                           </a>
                   <div class ="text">
                     <h2>The Cyburger</h2>
                     </div>
                   </div>
                   </th>
                </tr>



                <tr>
                   <th scope="col">
                    <div className="box">
                    <a href="https://www.youtube.com/watch?v=9Rc7ZaRTz20&feature=youtu.be">
                    <img src={require("./images/readme.PNG")} 
                           alt="Code Quiz" />
                           </a>
                   <div class ="text">
                     <h2>Readme Generator</h2>
                     </div>
                   </div>
                   </th>

                   <th scope="col">
                    <div className="box">
                    <a href="https://www.youtube.com/watch?v=wmikwP4H0H0&feature=youtu.be">
                    <img src={require("./images/employeetracker.PNG")} 
                           alt="Employee Tracker" />
                           </a>
                   <div class ="text">
                     <h2>Employee Tracker</h2>
                     </div>
                   </div>
                   </th>
                </tr>



              </tbody>
            </table>
          </figure>
        </div>
      </div>
    </div>

  );
}

export default Projects;
