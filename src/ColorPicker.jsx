import { useState } from "react";

export default function ColorPicker() {

const [selectedColor, setSelectedColor] = useState({ hex: null, name: null });
const [focusedIndex, setFocusedIndex] = useState(null);

const colors = [
  { name: "Red", hex: "#FF0000" },
  { name: "Green", hex: "#00FF00" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Cyan", hex: "#00FFFF" },
  { name: "Magenta", hex: "#FF00FF" },
];

// handleClick() sets the selected color when an item is clicked
function handleClick(color) {
  setSelectedColor({ hex: color.hex, name: color.name });
  console.log('you picked a color!');
}

// handleMouseEnter() previews the color text on hover by updating selectedColor state
function handleMouseEnter(hex) {
  const matchedColor = colors.find((c) => c.hex === hex);
  if (matchedColor) {
    setSelectedColor({ hex: matchedColor.hex, name: matchedColor.name });
  }
  console.log('you are hovering over a color!');
}

// handleMouseLeave()
function handleMouseLeave() {
  setSelectedColor({ hex: null, name: null });
  console.log('you stopped hovering!');
}

// handleFocus()
function handleFocus(index) {
  setFocusedIndex(index);
}

// handleBlur()
function handleBlur() {
  setFocusedIndex(null);
}

// handleKeyDown()
function handleKeyDown(e, index) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    handleClick(colors[index]);
  }
  console.log('you used the keys on the colors!');
}

return (
  <>
  <div className="color-picker">
    <h1>Color Picker</h1>
    <div className="color-list">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`color-item ${focusedIndex === index ? "focused" : ""}`}
          style={{ backgroundColor: color.hex }}
          onClick={() => handleClick(color)}
          onMouseEnter={() => handleMouseEnter(color.hex)}
          onMouseLeave={handleMouseLeave}
          onFocus={() => handleFocus(index)}
          onBlur={handleBlur}
          onKeyDown={(e) => handleKeyDown(e, index)}
          tabIndex={0}
        >
          {selectedColor.hex === color.hex && (
            <span className="color-code">
              {selectedColor.name || color.hex}
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
  </>
);

}