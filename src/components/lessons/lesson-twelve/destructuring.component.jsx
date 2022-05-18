import React from "react";

const cars = [
{
    model: "Honda Civic",
    //The top colour refers to the first item in the array below:
    //i.e. hondaTopColour = "black"
    coloursByPopularity: ["black", "silver"],
    speedStats: {
    topSpeed: 140,
    zeroToSixty: 8.5
    }
},
{
    model: "Tesla Model 3",
    coloursByPopularity: ["red", "white"],
    speedStats: {
    topSpeed: 150,
    zeroToSixty: 3.2
    }
}
];

// Destructuring car objects
const [honda, tesla] = cars;
const {speedStats, coloursByPopularity} = [honda, tesla]

// Destructing the destructured objects
const teslaTopSpeed = tesla.speedStats.topSpeed
const teslaTopColour = tesla.coloursByPopularity[0]

const hondaTopSpeed = honda.speedStats.topSpeed
const hondaTopColour = honda.coloursByPopularity[0]

const CarTable = () => {
    return (
        <table>
            <tr>
                <th>Brand</th>
                <th>Top Speed</th>
                <th>Top Colours</th>
            </tr>
            <tr>
                <td>{tesla.model}</td>
                <td>{teslaTopSpeed}</td>
                <td>{teslaTopColour}</td>
            </tr>
            <tr>
                <td>{honda.model}</td>
                <td>{hondaTopSpeed}</td>
                <td>{hondaTopColour}</td>
            </tr>
        </table>
    );
};

export default CarTable;