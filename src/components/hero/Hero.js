import React from "react";
import "./Hero.scss";
import heroImg from "../../assets/hero.png";

const Hero = ({ myTheme }) => {
  return (
    <section id="home" className="home" data-theme={myTheme}>
      
      <div className="social"> 
            <a href="#"><i className='fab fa-github'></i></a>
            <a href="#"><i className='fab fa-dribbble' ></i></a>
            <a href="#"><i className='fab fa-behance' ></i></a>
        </div>
        <div className="home-img">
            <img src={heroImg} alt="" />
        </div>
        <div className="home-text">
            <span>Hello, I'm</span>
            <h1>Shantanu <span>Jana</span>  </h1>
            <h2>Frontend Developer</h2>
            <p>Lorem ipsum dolor sit amet cons <br /> adipisicing elit. Minima, consectetur <br /> ullam?</p>
            <a href="#contact" className="btn">Contact Me <i className="fas fa-phone-alt"></i> </a>
        </div>

    </section>
  );
};

export default Hero;
