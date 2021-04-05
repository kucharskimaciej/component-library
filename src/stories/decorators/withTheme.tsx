import React from 'react';
import { Story as StoryComponent } from '@storybook/react';
import {ThemeProvider} from "styled-components"
import theme from "../../lib/theme";

export const WithTheme = (Story: StoryComponent) => (
    <ThemeProvider theme={theme}>
        <Story />
    </ThemeProvider>
)
