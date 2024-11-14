import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Example/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  children: "Secondary Button",
};
