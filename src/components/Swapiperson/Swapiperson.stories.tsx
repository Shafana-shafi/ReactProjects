import type { Meta, StoryObj } from '@storybook/react';
import { Swapiperson } from './Swapiperson';

const meta: Meta<typeof Swapiperson> = {
  title: 'App/Swapiperson',
  component: Swapiperson,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: { control: { type: 'number' }, description: 'ID of the Star Wars character to fetch' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 1,
  },
};

export const Secondary: Story = {
  args: {
    id: 2,
  },
};

export const Tertiary: Story = {
  args: {
    id: 3,
  },
};
