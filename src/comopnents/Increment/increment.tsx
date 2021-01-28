import React, { useState, useEffect } from 'react';

export default function Increment({ onCountChange = () => { } }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        onCountChange();
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increment Count
            </button>
        </div>
    );
}