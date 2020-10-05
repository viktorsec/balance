import React from 'react';
import { Button } from './Button';

export default {
  title: 'Design System/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  appearance: "primary",
  children: "Press me",
}
export const Secondary = Template.bind({});
Secondary.args = {
  appearance: "secondary",
  children: "Press me",
}
export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
  children: "Press me",
}
