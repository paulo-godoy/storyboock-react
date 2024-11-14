import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Example/Footer",
  component: Footer,
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});
Default.args = {};
