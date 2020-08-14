import React from "react";
import Thumbnail from "./Thumbnail.js"; // Import the Thumbnail component
import "../App";

function Projects(props) {
  return (
    // Render a Thumbnail component
    // <div>
    //   <h1>Projects</h1>
    //   <Thumbnail
    //     image=".../../../../images/unheard.png"/>

    //   <Thumbnail
    //     link="/airbnb"
    //     image="http://airbnb-image-url.jpg>"
    //     title="Airbnb Experiences"
    //     category="Website"
    //   />

 

    <div id="section" class="container-fluid">
      <div class="row">
        <div class="col-9 mt-4 p-3">
          <h1>Portfolio</h1>
          <hr />
          <figure>
            <table class="imageTable">
              <tbody>
                <tr>
                  <th scope="col">
                    <div class="box">
                   <Thumbnail image=".../../../../images/unheard.png" />
                   <div class ="text">
                     <h2>Unheard Stories</h2>
                     </div>
                   </div>
                   </th>
                

              
                  <th scope="col">
                    <div class="box">
                   <Thumbnail image=".../../../../images/dayplanner.png" />
                   <div class ="text">
                     <h2>Dayplanner</h2>
                     </div>
                   </div>
                   </th>
                   </tr>

                   <tr>
                  <th scope="col">
                    <div class="box">
                   <Thumbnail image=".../../../../images/codequiz.png" />
                   <div class ="text">
                     <h2>Code Quiz</h2>
                     </div>
                   </div>
                   </th>
                

              
                  <th scope="col">
                    <div class="box">
                   <Thumbnail image=".../../../../images/cyburger.jpg" />
                   <div class ="text">
                     <h2>The Cyburger</h2>
                     </div>
                   </div>
                   </th>
                   </tr>

                   <tr>
                  <th scope="col">
                    <div class="box">
                   <Thumbnail image=".../../../../images/nightlife.png" />
                   <div class ="text">
                     <h2>NightLife</h2>
                     </div>
                   </div>
                   </th>
                

              
                  <th scope="col">
                    <div class="box">
                   <Thumbnail image=".../../../../images/readme.png" />
                   <div class ="text">
                     <h2>Readme Generator</h2>
                     </div>
                   </div>
                   </th>
                   </tr>


                   <tr>
                  <th scope="col">
                    <div class="box">
                   <Thumbnail image=".../../../../images/employeetracker.png" />
                   <div class ="text">
                     <h2>NightLife</h2>
                     </div>
                   </div>
                   </th>
                
</tr>
                



                

      {/* <Thumbnail
        link="/photoshop"
        image=".../../../../images/unheard.png"
        title="Photoshop Redesign"
        category="Desktop App"
      /> */}
 


                {/* <tr>
                        <th scope="col">
                            <div class="box">
                            <a href="https://boaardz56.github.io/Nightlife/">
                            <img src="./images/nightlife.PNG" alt="Image Nightlife Website homepage">
                            </a>
                            <div class="text">
                                <h2>Nightlife</h2>
                            </div>
                            </div>
                        </th>
                        <th scope="col">
                            <div class="box">

                            <a href="https://saarahah.github.io/Javascript-Coding-Quiz-Homework/">
                            <img src="./images/codequiz.PNG" alt="Code Quiz Question">
                            </a>
                            
                            <div class="text">
                                <h2>Code Quiz</h2>
                            </div>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">
                            <div class="box"> 
                                <a href="https://saarahah.github.io/Homework-5-Day-Planner/">
                            <img src="./images/dayplanner.PNG" alt="Image of Work Day Scheduler">
                        </a> 
                            
                            <div class="text">
                                <h2>Day Planner</h2>
                            </div>
                            </div>
                        </th>

                        <th scope="col">
                            <div class="box">
                                <a href="https://quiet-meadow-99455.herokuapp.com/user/login">
                            <img src="./images/unheard.png" alt="Image of Unhead Website">
                            
                            <div class="text">
                                <h2>Unheard Stories</h2>
                            </div>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">
                            <div class="box">
                                <a href="https://protected-coast-08381.herokuapp.com/">
                            <img src="./images/cyburger.jpg">
                            
                            <div class="text">
                                <h2>The Cyburger</h2>
                            </div>
                            </div>
                        </th>
                    </tr>

                    <tr>
                        <th scope="col">
                            <div class="box">
                                <a href="https://www.youtube.com/watch?v=9Rc7ZaRTz20&feature=youtu.be">
                            <img src="./images/readme.PNG">
                            
                            <div class="text">
                                <h2>Readme Generator</h2>
                            </div>
                            </div>
                        </th>
                    </tr>

                    <th scope="col">
                        <div class="box">
                            <a href="https://www.youtube.com/watch?v=wmikwP4H0H0&feature=youtu.be">
                        <img src="./images/employeetracker.PNG" alt="Image of employee tracker">
                        
                        <div class="text">
                            <h2>Employee Tracker</h2>
                        </div>
                        </div>
                    </th>
                </tr> */}
              </tbody>
            </table>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Projects;
