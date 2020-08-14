import React from "react";
import Thumbnail from "./Thumbnail.js"; // Import the Thumbnail component
import "../App";
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Unheard from "../images/unheard.png"

function Projects(props) {
  return (
    <Route>
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
                   <Thumbnail image="../images/unheard.png" />
                   <div class ="text">
                     <h2>Unheard Stories</h2>
                     </div>
                   </div>
                   </th>
                

              
                  <th scope="col">
                    <div class="box">
                   <Thumbnail image="../images/dayplanner.png" />
                   <div class ="text">
                     <h2>Dayplanner</h2>
                     </div>
                   </div>
                   </th>
                   </tr>

                   <tr>
                  <th scope="col">
                    <div class="box">
                   <Thumbnail image="../images/codequiz.png" />
                   <div class ="text">
                     <h2>Code Quiz</h2>
                     </div>
                   </div>
                   </th>
                

              
                  <th scope="col">
                    <div class="box">
                   <Thumbnail image="../images/cyburger.jpg" />
                   <div class ="text">
                     <h2>The Cyburger</h2>
                     </div>
                   </div>
                   </th>
                   </tr>

                   <tr>
                  <th scope="col">
                    <div class="box">
                   <Thumbnail image="../images/nightlife.png" />
                   <div class ="text">
                     <h2>NightLife</h2>
                     </div>
                   </div>
                   </th>
                

              
                  <th scope="col">
                    <div class="box">
                   <Thumbnail image="../images/readme.png" />
                   <div class ="text">
                     <h2>Readme Generator</h2>
                     </div>
                   </div>
                   </th>
                   </tr>


                   <tr>
                  <th scope="col">
                    <div class="box">
                   <Thumbnail image="../images/employeetracker.png" />
                   <div class ="text">
                     <h2>NightLife</h2>
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
    </Route>
  );
}

export default Projects;
