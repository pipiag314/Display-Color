import React from "react";
import "./ColorInput.css"

const ColorInput = ({ setColor }) => {

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <input className="ColorInput" placeholder="Enter a color" type="text" onChange={(event) => handleChange(event)} />
    </div>
  );
};

export default ColorInput;
