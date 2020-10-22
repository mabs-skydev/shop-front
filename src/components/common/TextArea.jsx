import React from 'react';

const TextArea = ({label, name, placeholder, onChange, value, error}) => {
    return ( 
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <textarea
            className="form-control"
            id={name}
            name={name}
            rows="3"
            onChange={onChange}
            placeholder={placeholder}
            value={value}   
        />
    </div>

     );
}
 
export default TextArea;