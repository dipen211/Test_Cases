import { useState } from 'react';

export default function customHook() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(x => x + 1);

    return { count, increment };
}