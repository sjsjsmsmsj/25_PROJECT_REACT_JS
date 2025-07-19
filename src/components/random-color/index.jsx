import React, { useState } from 'react';

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex'); 
    const [color, setColor] = useState('black');

    const randomColorUtitlity = (length) => {
        return Math.floor(Math.random() * length);
    }

    const handleCreateRandomHexColor = () => {
        // #123456
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += hex[randomColorUtitlity(hex.length)];
        }
        console.log(color);
        setColor(color);
    }
    const handleCreateRandomRgbColor = () => {
        const r = randomColorUtitlity(256);
        const g = randomColorUtitlity(256);
        const b = randomColorUtitlity(256);
        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    return (
        <div
            style={{
                background: color,
                height: '100vh',
                width: '100vw',
                
            }}
        >
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={() => typeOfColor === 'hex' ? handleCreateRandomHexColor() : handleCreateRandomRgbColor()}>Generate Random Color</button>
            <div
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}
            >
                <h3>{typeOfColor}</h3>
                <h3>{color}</h3>
            </div>
        </div>
    );
}
