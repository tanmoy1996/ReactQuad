import { useState } from 'react'; 
import './App.css';
//import the vertex and edges of the quadrilateral
import { Point } from './Point.js'; 
import { Line } from './Line.js'; 

function App() { 
  
  //Array of vertices-dots and edges-lines
  const [dots, setdots] = useState([]);
  const [lines, setlines] = useState([]); 
  
  //to position the edges
  function drawLine(first, second,third){
    var temp = second;
    // to align the edge for calculating rotation
    if (second.left<first.left){
      temp = second;
      second = first;
      first = temp;
    }
    // calculating angle and distance
    var xdiff = second.left - first.left;
    var ydiff = second.top - first.top;
    var slopeRad = Math.atan(ydiff/xdiff);
    var angle = slopeRad * 180 / Math.PI;
    var dis = Math.sqrt((xdiff*xdiff)+(ydiff*ydiff));
    // when there are 3 points
    if (third)
    {
        if (third.left<temp.left){
          var temp1 = third;
          third = temp;
          temp = temp1;
        }
      // calculating angle and distance
      var xdiff1 = third.left - temp.left;
      var ydiff1 = third.top - temp.top;
      var slopeRad1 = Math.atan(ydiff1/xdiff1);
      var angle1 = slopeRad1 * 180 / Math.PI;
      var dis1 = Math.sqrt((xdiff1*xdiff1)+(ydiff1*ydiff1));
      // storing the edges
      setlines([...lines,{top:temp.top+12, left:temp.left+12, width: dis1, deg: angle1},{top:first.top+12, left:first.left+12, width: dis, deg: angle},])
    }
    else
    {
      
      setlines([...lines,{top:first.top+12, left:first.left+12, width: dis, deg: angle}])
    }
    console.log(lines)
  }
  function addComponent(e) { 
    const x = e.clientX; //x position within the element.
    const y = e.clientY;  //y position within the element.
    var l = dots.length;
    // storing the vertices
    setdots([...dots, {top:y,left:x}])
    if(l%4==1)
    {
      // when the 2nd vertex is created
      var secondIndex = Math.floor(l/4)*4+l%4;
      var firstIndex = secondIndex-1;
      var second = {top:y,left:x};
      var first = dots[firstIndex];
      drawLine(first,second)
      
    }

    if(l%4==2)
    {
      // when the 3rd vertex is created
      var thirdIndex = Math.floor(l/4)*4+l%4;
      var secondIndex = thirdIndex-1;
      var third = {top:y,left:x};
      var second = dots[secondIndex];
      drawLine(second,third)
      
    }

    if(l%4==3)
    {
      // when the 4th vertex is created
      var forthIndex = Math.floor(l/4)*4+l%4;
      var thirdIndex = forthIndex-1;
      var firstIndex = forthIndex-3>0?forthIndex-3:0;
      var forth = {top:y,left:x};
      var third = dots[thirdIndex];
      var first = dots[firstIndex];
      drawLine(third, forth, first);
      // drawLine(first,forth);
      
      
    }
  } 
  
  return ( 
    
    <div className="App" id="clickarea" onClick={e=>addComponent(e)}> 
      {dots.map((item, i) => ( <Point id={i} top={item.top} left={item.left} /> ))}
      {lines.map((item, j) => ( <Line id={j} top={item.top} left={item.left} width={item.width} deg={item.deg}/> ))} 
      {/* <Line top='400' left='300' width='250' deg='65' /> */}
    </div> 
    
  ) 
  
} 

export default App;
