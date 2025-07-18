import { Button } from '@juwel-development/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Interaction/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default button
export const Default: Story = {
  args: {
    children: 'Click Me',
  },
};

// Button with longer text
export const LongText: Story = {
  args: {
    children: 'This is a button with longer text',
  },
};
