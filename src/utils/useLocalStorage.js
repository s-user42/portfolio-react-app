import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);

    return initial || defaultValue;
}


export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, defaultValue]);


    return [value, setValue];
}