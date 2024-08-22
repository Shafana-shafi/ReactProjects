// src/App.stories.tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import App from './App';
import './App.css';

export default {
  title: 'Example/App',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {};

// Example of App with preset values
export const WithValues = Template.bind({});
WithValues.args = {
  formData: { bill: 100, persons: 4 },
  tip: 15,
};

// Example of App with errors
export const WithErrors = Template.bind({});
WithErrors.args = {
  formData: { bill: 0, persons: 0 },
  errors: { bill: 'Should be greater than 0', persons: 'Should be greater than 0' },
};
