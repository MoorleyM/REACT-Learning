import React from "react";

import FormInput from "../input/input.component";

const SignUp = () => {
    return (
        <form>
            <FormInput 
                label='Username'
                type='text' 
                required 
                placeholder='Username' 
            />

            <FormInput 
                label='Password'
                type='password' 
                required 
                placeholder='Password'
            />

            <FormInput 
                label='Confirm Password'
                type='password' 
                required 
                placeholder='Confirm Password'
            />
            <button type='submit'>Register</button>
        </form>
    );
};

export default SignUp;