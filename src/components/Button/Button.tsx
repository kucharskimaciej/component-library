import React from 'react';
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

export const Button: React.FC<ButtonProps> = (props) => <ChakraButton {...props} />;
