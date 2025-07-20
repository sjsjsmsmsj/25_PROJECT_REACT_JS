import { use } from "react";
import { useState, useEffect } from "react";
import './theme.css'

export default function UseLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        let currentValue;
        try {
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
            if (currentValue === null) {
                currentValue = defaultValue;
            }
        } catch (e) {
            console.log(e);
            currentValue = defaultValue;
        }
        return currentValue;
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];

}