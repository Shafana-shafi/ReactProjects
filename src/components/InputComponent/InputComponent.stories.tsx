import type { Meta, StoryObj } from '@storybook/react';
import { InputComponent } from './InputComponent';
import React, { useState } from 'react';


const meta: Meta<typeof InputComponent> = {
  title: 'App/InputComponent',
  component: InputComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' } },
    typeOfIcon: { control: { type: 'radio', options: ['person', 'dollar'] } },
    value: { control: { type: 'number' } },
    onChange: { action: 'changed' },
    errorMessage: { control: { type: 'text' } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Stories for InputComponent
export const Default: Story = {
  args: {
    value: 4,
    label: "Bill",
    typeOfIcon: "dollar",
    errorMessage: '',
  },
};

export const Secondary: Story = {
  args: {
    value: 1,
    label: "Number of people",
    typeOfIcon: "person",
    errorMessage: '',
  },
};

export const Large: Story = {
  args: {
    value: 100,
    label: "Total Amount",
    typeOfIcon: "dollar",
    errorMessage: '',
  },
};

export const Small: Story = {
  args: {
    value: -1,
    label: "Negative Value",
    typeOfIcon: "dollar",
    errorMessage: 'Should be greater than 0',
  },
};

// Form Component used within Storybook
export const FormStory = () => {
  const [formData, setFormData] = useState({ bill:0, persons: 0 });
  const [errors, setErrors] = useState({ bill: '', persons: '' });

  const validateValue = (value: number) => {
    return value > 0 ? '' : 'Should be greater than 0';
  };

  const handleChange = (field: 'bill' | 'persons') => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setFormData(prev => ({ ...prev, [field]: newValue }));
    console.log(formData)
    setErrors(prev => ({ ...prev, [field]: validateValue(newValue) }));
    console.log(errors)
  };

  return (
    <form>
      <InputComponent
        value={formData.bill}
        label="Bill"
        typeOfIcon="dollar"
        errorMessage={errors.bill}
        onChange={handleChange('bill')}
      />
      <InputComponent
        value={formData.persons}
        label="Persons"
        typeOfIcon="person"
        errorMessage={errors.persons}
        onChange={handleChange('persons')}
      />
    </form>
  );
};

