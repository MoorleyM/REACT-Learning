import React from 'react';

import Card from './card.component';

function CreateCard(contact) {
    return (
        <Card 
            name={contact.name}
            img={contact.img}
            phone={contact.phone}
            email={contact.email}
        />
    );
};

export default CreateCard;