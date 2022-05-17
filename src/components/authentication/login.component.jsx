import React from "react";

import FormInput from "../input/input.component";

const Login = () => {
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
            <button type='submit'>Log In</button>
        </form>
    );
};

export default Login;