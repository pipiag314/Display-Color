import DisplayBox from "./components/DisplayBox";
import ColorInput from "./components/ColorInput";
import './App.css';
import { useState } from "react";

function App() {
  const [color, setColor] = useState('');
  
  return (
    <div className="App">
      <DisplayBox color={color} />
      <ColorInput setColor={setColor} />
    </div>
  )
}

export default App;
