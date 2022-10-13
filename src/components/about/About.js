import React from "react";
import "./About.scss";
import aboutImg from "../../assets/about.jpg";

const About = ({ myTheme }) => {
  return (
    <section id="about" className="about"  data-theme={myTheme}>
            <h1 className="heading"> about <span>me</span> </h1>
        <div className="main_about">
        <div className="about-img">
                <img src={aboutImg} alt="" />
            </div>
            <div className="about-text">
                <h5>Developer <span>& Designer</span></h5>
                <p>I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.A responsive design makes your website accessible to all users, regardless of their device.</p>
                <a href="resume-sample.pdf" target="_blank" className="btn"> download CV <i className="fas fa-download"></i> </a>
            </div>

    </div>
    </section>
  );
};

export default About;
