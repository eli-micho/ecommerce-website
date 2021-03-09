import React from 'react';
import './styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) => {
    return(
        <div className="formInput">
            {label &&
                <label>{label}</label>
            }
            <input onChange={handleChange} {...otherProps}></input>
        </div>
    );
};

export default FormInput;
