import React from 'react';

const Input = ({name, type = "text", value, placeholder, label, options, error, onChange}) => {
    return (<React.Fragment>
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                type={type}
                className="form-control"
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...options}
            />
        </div>
    </React.Fragment>);
}
 
export default Input;