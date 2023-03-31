import { useState, useEffect } from 'react' 
import { parse } from 'uuid';

const PREFIX = 'whatsapp-clone-'

export default function useLocalStorage(key, initialValue) {
    const prefixedValue = PREFIX + key;
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedValue)
        if(jsonValue != null && jsonValue !== 'undefined' && jsonValue !== 'null') return JSON.parse(jsonValue)
        if(typeof initialValue === 'function') return initialValue();
        else return initialValue
    })

    useEffect(() => {
        localStorage.setItem(prefixedValue, JSON.stringify(value))
    }, [prefixedValue, value])
    
  return [value, setValue]
}
