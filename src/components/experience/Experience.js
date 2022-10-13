import React from "react";
import "./Experience.scss";


const Experience = ({ myTheme }) => {
  return (
    <section id="experience" className="experience"  data-theme={myTheme}>
         <h1 className="heading"> <span>my</span> experience </h1>
         <div className="box-container">

        <div className="box">
            <i className="fas fa-code"></i>
            <span>2015 - 2016</span>
            <h3>front-end development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
        </div>

        <div className="box">
            <i className="fas fa-code"></i>
            <span>2016 - 2017</span>
            <h3>front-end development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
        </div>

        <div className="box">
            <i className="fas fa-code"></i>
            <span>2017 - 2018</span>
            <h3>front-end development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
        </div>

        <div className="box">
            <i className="fas fa-code"></i>
            <span>2018 - 2019</span>
            <h3>front-end development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
        </div>

        <div className="box">
            <i className="fas fa-code"></i>
            <span>2019 - 2020</span>
            <h3>front-end development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
        </div>

        <div className="box">
            <i className="fas fa-code"></i>
            <span>2020 - 2021</span>
            <h3>front-end development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
        </div>

    </div>

    </section>
  );
};

export default Experience;
