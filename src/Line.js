import React from 'react'; 
import './Line.css';

const Line = (props) => { 

  const heading = {
    // styles to draw the edges
    top: props.top+'px', 
    left: props.left+'px',
    width: props.width+'px',
    transform: 'rotate('+props.deg+'deg)'
}

  return ( 
    
    <div className="Line" style={heading}></div> 
    
  ); 
  
}; 

export {Line};