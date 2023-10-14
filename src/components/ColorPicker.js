// src/components/ColorPicker.js

import React, { useState } from "react";
import "./ColorPicker.css"

const colors = ["#FF0000", "#90EE90", "#00008B", "#FFFF00", "#800080","#00FFFF","#FFA500"," #EE82EE","#FFDAB9"," #006400","#FF4500","#00CED1","#A52A2A","#FFD700"];

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [isColorListVisible, setColorListVisible] = useState(false);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setColorListVisible(false);
  };

  const toggleColorList = () => {
    setColorListVisible(!isColorListVisible);
  };

  return (
    <div className="color-picker">
      
      <div className="selected-color" style={{ backgroundColor: selectedColor }}>
      </div>
      <div className="color-list">
        {isColorListVisible &&
          colors.map((color, index) => (
            <div
              key={index}
              className="color-option"
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            />
          ))}
      </div>
      <div className="color-button">
        <button onClick={toggleColorList}>Pick a color</button>
      </div>
    </div>
  );
};

export default ColorPicker;
