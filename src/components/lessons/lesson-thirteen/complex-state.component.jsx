import 
    React, 
    {useState} 
from "react";

import FormInput from "../../input/input.component";

const ComplexState = () => {

    const [contact, setContact] = useState({
        fName: '',
        lName: '',
        email: ''
    })

    const HandleChange = (event) => {
        const {value, name} = event.target;

        setContact(prevValue => {
            // if (name === 'fName') {
            //     return {
            //         fName: value,
            //         lName: prevValue.lName,
            //         email: prevValue.email
            //     }
            // } else if (name === 'lName') {
            //     return {
            //         fName: prevValue.fName,
            //         lName: value,
            //         email: prevValue.email
            //     }
            // } else if (name === 'email') {
            //     return {
            //         fName: prevValue.fName,
            //         lName: prevValue.lName,
            //         email: value
            //     }
            // }
            return {
                ...prevValue,
                [name] : value
            }
        });
    };

    // const updateFName = (event) => {
    //     const firstName = event.target.value;
    //     setContact({fName: firstName})
    // }

    // const updateLName = (event) => {
    //     const lastName = event.target.value;
    //     setContact({lName: lastName})
    // }

    // const updateEmail = (event) => {
    //     const email = event.target.value;
    //     setContact({email: email})
    // }

    return (
        <div>
            <h1>Hello {contact.fName} {contact.lName}</h1>
            <p>{contact.email}</p>
            <FormInput 
                label='First Name'
                placeholder='First Name'
                type='text'
                name='fName'
                value={contact.fName}
                onChange={HandleChange}
            />
            <FormInput 
                label='Last Name'
                placeholder='Last Name'
                type='text'
                name='lName'
                value={contact.lName}
                onChange={HandleChange}
            />
            <FormInput 
                label='Email'
                placeholder='Email'
                type='email'
                name='email'
                value={contact.email}
                onChange={HandleChange}
            />
            <button>Submit</button>
        </div>
    );
};
export default ComplexState;