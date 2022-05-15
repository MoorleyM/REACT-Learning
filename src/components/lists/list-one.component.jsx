import React from "react";

import FruitHeading from "../headings/fruits-heading.component";

function ListOne() {
    return (
        <div>
            <FruitHeading />
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Strawberry</li>
                <li>Mango</li>
                <li>Grapes</li>
            </ul>
        </div>
    )
}

export default ListOne;