import 
    React, 
    {useState} 
from "react";

const GetTime = () => {
    const [time, setTime] = useState("Time")

    const CurrentTime = () => {
        let time = new Date().toLocaleTimeString();
        setTime(time)
        setInterval(CurrentTime, 1000);
    }

    return (
        <div>
            <h1>{time}</h1>
            <button onClick={CurrentTime} >Get Time</button>
        </div>
    );
};

export default GetTime;