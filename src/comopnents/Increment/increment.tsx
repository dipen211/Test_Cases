import React, { useState, useEffect } from 'react';

export default function Increment() {
    const [count, setCount] = useState(0);

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