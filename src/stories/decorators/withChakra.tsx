import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { Story as StoryComponent } from '@storybook/react';
import {qualioTheme} from "../../lib/theme";

export const WithChakra = (Story: StoryComponent) => (
  <ChakraProvider theme={qualioTheme}>
    <Global
      styles={`
      @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700");
      html {
        font-size: 10px;
      }
    `}
    />
    <Story />
  </ChakraProvider>
);
