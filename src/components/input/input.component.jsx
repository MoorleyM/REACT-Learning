import React from "react";

const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className='form-inputs'>
            <label className='form-input'>{label}</label>
            <input className='form-input' {...otherProps} />
        </div>
    );
};

export default FormInput;