import { useEffect, useState } from "react";
import './index.css'

export default function RandomColor() {
  const [typerOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const [colorName, setColorName] = useState("#000000");

  function handleCreateRandomHexColor(){
    const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexColor = "#";

    for(let i=0;i<6;i++){
      hexColor+= hex[randomGenerator(hex.length)];
    }
    setColor(hexColor);
    setColorName(hexColor);
  }
  function handleCreateRandomRgbColor(){
    let r=randomGenerator(256);
    let g=randomGenerator(256);
    let b=randomGenerator(256);
    
    let rgbColor=`rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
    setColorName(rgbColor)
  }

  function randomGenerator(length){
     return Math.floor(Math.random()*length)
  }
  useEffect(()=>{
    if(typerOfColor==='rgb') handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  },[typerOfColor])
  return (
    <div style={{
        width: "100vw",
        height: "100vh",
        background: color,

    }}>
      
     <div className="contant">
     <h2>{typerOfColor == 'hex'? "Hex Color": "RGB Color"}</h2>
      <h1>{colorName}</h1>
     </div>
     <div className="container">
        <button onClick={()=> setTypeOfColor('hex')} className="hexColor">Create Hex Color</button>
        <button onClick={()=> setTypeOfColor('rgb')} className="rgbColor">Create RGB Color</button>
        <button onClick={typerOfColor == 'hex'? handleCreateRandomHexColor: handleCreateRandomRgbColor} className="randomColor">Generate Random Color</button>
      </div>
    </div>
  );
}
