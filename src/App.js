import logo from './logo.svg';
import React from "react";
import './App.css';
import ColorPicker from "./components/ColorPicker";

function App() {
  return (
    <div className="App">
      <div className='color-picker'>
        <h2>Color Picker</h2></div>
        <ColorPicker />
    </div>
  );
}

export default App;
