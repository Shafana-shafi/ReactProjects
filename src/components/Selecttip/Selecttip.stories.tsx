import type { Meta, StoryObj } from '@storybook/react';
import { Selecttip } from './Selecttip';

const meta: Meta<typeof Selecttip> = {
  title: 'App/SelectTip',
  component: Selecttip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Select Tip",
  },
};
