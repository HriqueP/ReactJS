import React, { useState } from "react";
import styles from "../color_selector/Color.module.css";

function Color() {
  /* Valor da cor no useState tem q obedecer o formato Hex de cores, 
  caso contrario a propriedade de 'value' no input não ira funcionar */

  const [color, setColor] = useState("#000000");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className={styles.color_picker_container}>
      <h2>Color Picker</h2>
      <div className={styles.color_display} style={{ backgroundColor: color }}>
        <p>{color}</p>
      </div>
      <label>Select a Color:</label>
      <input
        type="color"
        value={color}
        onChange={(event) => handleColorChange(event)}
      />
    </div>
  );
}

export default Color;
