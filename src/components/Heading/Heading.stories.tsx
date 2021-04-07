import React from 'react';
import {Story, Meta} from '@storybook/react';
import {WithChakra} from "../../stories/decorators/withChakra";
import {Heading} from "./Heading";

export default {
    title: 'Shared/Heading',
    argTypes: {
        text: {control: 'text', defaultValue: 'Hello world!'}
    },
    decorators: [WithChakra],
} as Meta;

export const SimpleUsage: Story<{ text: string }> = (props) => (
    <div>
        <Heading ml={2}>{props.text}</Heading>
    </div>
);
