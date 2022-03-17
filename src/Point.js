import React from 'react'; 
import './Point.css';

const Point = (props) => { 

  const heading = {
    // styles to point the dots in the body of HTML
    top: props.top+'px',
    left: props.left+'px'
}

  return ( 
    
    <div className="Point" style={heading}></div> 
    
  ); 
  
}; 

export {Point};