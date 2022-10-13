import React from "react";
import "./Skills.scss";
import Icon1 from "../../assets/icon-1.png";
import Icon2 from "../../assets/icon-2.png";
import Icon3 from "../../assets/icon-3.png";
import Icon4 from "../../assets/icon-4.png";
import Icon5 from "../../assets/icon-5.png";
import Icon6 from "../../assets/icon-6.png";

const Skills = ({ myTheme }) => {
  return (
    <section id="skills" className="skills"  data-theme={myTheme}>
        <h1 className="heading">  <span>my</span> Skills</h1>
        <div className="box-container">
        <div className="box">
        <img src={Icon1} />
            <h3>html</h3>
        </div>
        <div className="box">
            <img src={Icon2} />
            <h3>css</h3>
        </div>
        <div className="box">
            <img src={Icon3} />
            <h3>javascript</h3>
        </div>
        <div className="box">
            <img src={Icon4} />
            <h3>sass</h3>
        </div>
        <div className="box">
            <img src={Icon5} />
            <h3>jquery</h3>
        </div>
        <div className="box">
            <img src={Icon6} />
            <h3>react.js</h3>
        </div>
    </div>
        
    </section>
  );
};

export default Skills;
