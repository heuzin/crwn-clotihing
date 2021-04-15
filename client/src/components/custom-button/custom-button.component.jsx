import React from 'react';

import { CustomButtomContainer } from './custom-button.styles';

const CustomButtom = ({ children, ...props}) => (
    <CustomButtomContainer {...props}>{children}</CustomButtomContainer>
);

export default CustomButtom;