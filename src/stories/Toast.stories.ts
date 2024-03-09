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
    message:"Well done, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content. Be sure to use margin utilities to keep things nice and tidy.",
    type:"SuccessWithCTA",
    buttonLabel:"Take action"
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
    message: "Oh snap, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content. Be sure to use margin utilities to keep things nice and tidy.",
    type:'DangerWithCTA',
    buttonLabel:"Go back"

  },
};

// Avatar
export const Avatar: Story = {
  args: {
    message:"Hi Neil, thanks for sharing your thoughts regardingFlowbite.",
    buttonLabel:"Go Home",
    type:"Avatar"
  },
};
