import React from "react";
import Thumbnail from "./Thumbnail.js"; // Import the Thumbnail component
import "../App";

function Projects(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
      <Thumbnail
        image=".../../../../images/unheard.png"/>

      <Thumbnail
        link="/airbnb"
        image="http://airbnb-image-url.jpg>"
        title="Airbnb Experiences"
        category="Website"
      />

      <Thumbnail
        link="/photoshop"
        image="http://photoshop-image-url.jpg"
        title="Photoshop Redesign"
        category="Desktop App"
      />
    </div>
  );
}

export default Projects;
