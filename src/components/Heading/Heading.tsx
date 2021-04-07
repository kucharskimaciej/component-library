import React from 'react';
import styled from '@emotion/styled';
import {chakra} from '@chakra-ui/react';
import {themeGet} from "@styled-system/theme-get";



export const Heading = styled(chakra.h1)`
  font-size: ${themeGet('fontSizes.4xl')};
  color: ${themeGet('colors.primary.100')};
`
