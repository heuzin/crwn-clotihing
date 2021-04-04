import React from 'react';

// import './custom-button.styles.scss';

import { CustomButtomContainer } from './custom-button.styles';

const CustomButtom = ({ children, ...props}) => (
    <CustomButtomContainer {...props}>{children}</CustomButtomContainer>
);

export default CustomButtom;