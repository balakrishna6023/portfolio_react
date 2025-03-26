import React from "react";
import "./about.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about-image.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an enthusiastic and dedicated Full Stack Developer with a
              foundational understanding of Java development and full-stack
              technologies. I specialize in building dynamic and efficient web
              applications using modern frameworks and languages. Despite having
              less professional experience, my passion for coding drives me to
              continuously learn and adapt to new challenges.
            </p>
          </div>
          <div className="about-skills">
            {["HTML & CSS", "React JS", "Javascript", "JAVA", "MERN stack"].map(
              (skill, index) => (
                <div className="about-skill" key={index}>
                  <p>{skill}</p>
                  <progress value={(index + 6) * 10} max="100"></progress>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="about-ach">
        {[{ count: "1+", text: "Years of experience" },
          { count: "10+", text: "Projects completed" },
          { count: "15+", text: "Happy clients" }].map((item, index) => (
          <div key={index} className="about-achievement">
            <h1>{item.count}</h1>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
