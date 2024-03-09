import type { Meta, StoryObj } from '@storybook/react';



import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Example/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    buttonLabel:{type:'string'},
  },
  tags: ['autodocs'],
} ;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

// Success
export const Success: Story = {
  args: {
    message:"The action that you have done was a success! Well done",
    type:"Success",

  },
};
export const SuccessWithButton: Story = {
  args: {
    message:"The action that you have done was a success! Well done",
    type:"SuccessWithCTA",
    buttonLabel:"Go to Dashboard"
  },
};

// Danger
export const Danger: Story = {
  args: {
    message: "We are reaching out to you about your car's extended warranty.",
    type:'Danger'

  },
};
export const DangerWithBUTTON: Story = {
  args: {
    message: "We are reaching out to you about your car's extended warranty.",
    type:'DangerWithCTA',
    buttonLabel:"Go back"

  },
};

// Avatar
export const Avatar: Story = {
  args: {
    message:"Hey sweetie, how's your day going, just wanted to reach out to you about your car's extended waranty and the policies that come along with that",
    buttonLabel:"Go Home",
    type:"Avatar"
  },
};
