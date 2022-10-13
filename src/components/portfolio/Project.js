import React from 'react';

const Project = ({ item }) => {
  return (
   <a href={item.url} target="_blank">
     <div key={item.id} className='box '>
  
       <img  src={item.image} alt='' />

      <div className="content ">
      <p>{item.category}</p>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
        <div>
            <button className='smBtn'>Preview <i className="fa fa-up-right-from-square"></i></button>
        </div>
      </div>
      </div>
   </a>
  );
};

export default Project;
