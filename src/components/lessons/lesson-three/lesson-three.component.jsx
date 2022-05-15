import React from 'react';

// Create a React app from scratch.
// Show a single h1 that says " Good Morning " if between midnight and 12pm
// or " Good Afternoon " if between 12pm and 6pm
// or " Good Evening " if between 6Pm and midnight
// Dynamically change the color of the h1 using inline css styles
// Morning = red, Afternoon = green and Night = blue.

const currentDate = new Date();

const currentHour = currentDate.getHours();
let heading;

const customStyles = {
    color: ""
}

if (currentHour < 12) {
    heading = "Good Morning"
    customStyles.color = "red"
} else if (currentHour < 18) {
    heading = "Good Afternoon"
    customStyles.color = "green"
} else {
    heading = "Good Night"
    customStyles.color = "blue"
}

function LessonThree() {
    return (
        <h1 className='lesson-three-heading' style={customStyles}>{heading}</h1>
    )
}

export default LessonThree;