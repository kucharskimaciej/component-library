import React from 'react';
import {Story, Meta} from '@storybook/react';
import {Button} from './Button';
import {WithChakra} from "../../stories/decorators/withChakra";

export default {
    title: 'Shared/Button',
    argTypes: {
        text: {control: 'text', defaultValue: 'Button label!'},
        variant: {control: 'select', options: ["solid", "outline"]}
    },
    decorators: [WithChakra],
} as Meta;

export const SimpleUsage: Story<{ text: string, variant: string }> = (props) => (
    <div>
        <Button variant={props.variant}>{props.text}</Button>
    </div>
);
