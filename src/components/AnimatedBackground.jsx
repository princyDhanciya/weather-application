import React from "react";
import "./AnimatedBackground.css";

const AnimatedBackground = () => {
  return (
    <div className="container">
      <div className="container-1">
        <h2>TechSYNC Webdesign</h2>
        <div className="cloud">
          <img src={process.env.PUBLIC_URL + "/images/cloud1.png"} alt="" style={{ "--i": 1 }} />
          <img src={process.env.PUBLIC_URL + "/images/cloud2.png"} alt="" style={{ "--i": 2 }} />
          <img src={process.env.PUBLIC_URL + "/images/cloud3.png"} alt="" style={{ "--i": 3 }} />
          <img src={process.env.PUBLIC_URL + "/images/cloud4.png"} alt="" style={{ "--i": 4 }} />
          <img src={process.env.PUBLIC_URL + "/images/cloud5.png"} alt="" style={{ "--i": 5 }} />
        </div>
      </div>
      <div className="container-2">
        <h4>CSS Cloud Animation Effect</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default AnimatedBackground;
