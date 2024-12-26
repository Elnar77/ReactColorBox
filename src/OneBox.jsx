import "./OneBox.css";
import { useState } from "react";

export default function OneBox({ colors }) {
    // Zufällige Startfarbe auswählen
    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
    const [color, setColor] = useState(getRandomColor);

    const changeColor = () => {
        let newColor = getRandomColor();
        while (newColor === color) {
            newColor = getRandomColor(); // Vermeide die gleiche Farbe
        }
        setColor(newColor);
    };

    return <div className="OneBox" onClick={changeColor} style={{ backgroundColor: color }}></div>;
}
