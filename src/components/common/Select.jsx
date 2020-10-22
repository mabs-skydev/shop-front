import React from 'react';

const Select = ({name, label, options, value, onChange, error}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select
                className="form-control"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required>
                    <option value=""></option>
                    {options && options.map(item => <option value={item._id} key={item._id}>{item.name}</option>
                    )}
            </select>
        </div>
     );
}
 
export default Select;