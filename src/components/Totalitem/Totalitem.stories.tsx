// Totalitem.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Totalitem from './Totalitem';

const meta: Meta<typeof Totalitem> = {
  title: 'App/Totalitem',
  component: Totalitem,
  parameters: {
    layout: 'centered', // Optional parameter to center the component in the Canvas
  },
  tags: ['autodocs'],
  
  args: {
    label: 'Total Amount',
    value: 0,
  },
} satisfies Meta<typeof Totalitem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Totalitem',
    value: 100.0,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Items',
    value: 50,
  },
};

export const LargeValue: Story = {
  args: {
    label: 'Tip Amount',
    value: 1000,
  },
};

export const SmallValue: Story = {
  args: {
    label: 'Tip Amount',
    value: 10,
  },
};
