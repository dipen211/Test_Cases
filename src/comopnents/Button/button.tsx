import react, { useState } from 'react';

export const Button = () => {
    const [show, setShow] = useState(true);
    const [count, setCount] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
    const increment = () => {
        setCount(count => count + 1);
    }
    const toggleShow = () => {
        setShow(!show)
    }
    const onChange = () => {
        setIsChecked(!isChecked);
    }
    return (
        <div>
            <button className="buttonText" onClick={toggleShow}>Toggle</button>
            {show && <div>Text</div>}
            <button className="buttonAdd" onClick={increment}>Add</button>
            <h2>{count}</h2>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
            />
            {isChecked ? "On" : "Off"}
        </div>
    )
}