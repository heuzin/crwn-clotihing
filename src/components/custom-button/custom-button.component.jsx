import React from 'react';
import './custom-button.styles.scss';

const CustomButtom = ({ children, ...props }) => (
    <button className='custom-button' {...props}>
        {children}
    </button>
)

export default CustomButtom;