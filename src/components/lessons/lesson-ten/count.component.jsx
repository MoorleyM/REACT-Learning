import 
    React, 
    {useState} 
from "react";

// var count = 0;

const Count = () => {
    const [count, setCount] = useState(0)

    const Increase = () => {
        setCount(count + 1)
    }

    const Decrease = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Increase} >+</button>
            <button onClick={Decrease} >-</button>
        </div>
    );
};

export default Count;