import React from 'react';
import './custom-button.styles.scss';

const CustomButtom = ({ children,  isGoogleSignIn, ...props }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...props}>
        {children}
    </button>
)

export default CustomButtom;