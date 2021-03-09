import React from 'react';
import './styles.scss';

const FormButton = ({ children, ...otherProps}) => {
    return(
        <button className="formBtn" {...otherProps}>
            {children}
        </button>
    );
};

export default FormButton;
