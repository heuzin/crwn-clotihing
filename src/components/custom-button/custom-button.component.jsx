import React from 'react';

const CustomButtom = ({ children, ...props }) => (
    <button className='custom-button' {...props}>
        {children}
    </button>
)

export default CustomButtom;