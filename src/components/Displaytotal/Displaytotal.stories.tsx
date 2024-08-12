// Displaytotal.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Displaytotal from "./Displaytotal";

const meta: Meta<typeof Displaytotal> = {
  title: "App/Displaytotal",
  component: Displaytotal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {},
} satisfies Meta<typeof Displaytotal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {},
};

export const Large: Story = {
  args: {},
};

export const Small: Story = {
  args: {},
};
