import { useState } from "react";

// Write your Color component here
const Color = ({ color, setSelectedColor, selectedColor }) => {
  const isSelected = color === selectedColor;

  const classes = isSelected ? `${color} selected` : color;

  return <div className={classes} onClick={() => setSelectedColor(color)}></div>
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor} style={{ color: selectedColor }}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color='green' setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color color='violet' setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color color='red' setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
      </div>
    </div>
  );
};

export default App;
