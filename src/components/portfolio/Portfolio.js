import React from 'react';
import "./Portfolio.scss";

// import components
import Projects from './Projects';

const Portfolio =  ({ myTheme }) => {
  return (
    <section id='portfolio' className='portfolio' data-theme={myTheme}>
            <h1 className="heading">  <span>my</span> works</h1>

        
        <Projects />
     
    </section>
  );
};

export default Portfolio;
