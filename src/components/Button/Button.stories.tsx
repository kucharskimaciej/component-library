import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from './Button';
import {WithTheme} from "../../stories/decorators/withTheme";

export default {
    title: 'Button',
    argTypes: {
        text: { control: 'text', defaultValue: 'Button label!' },
        variant: { control: 'select', options: ['primary', 'secondary'], defaultValue: 'primary'}
    },
    decorators: [WithTheme],
} as Meta;

export const SimpleUsage: Story<{ text: string, variant: 'primary' | 'secondary' }> = (props) => (
    <div>
        <Button variant={props.variant}>{props.text}</Button>
    </div>
);
