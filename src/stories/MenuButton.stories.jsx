import React from "react";

import { MenuButton } from "../components/styled/MenuButton";

export default {
  title: "Example/MenuButton",
  component: MenuButton,
  argTypes: {
    themeColor: { control: "color" },
    secondaryColor: { control: "color" },
  },
};

const Template = (args) => <MenuButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  size: "medium",
  label: "버튼",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "버튼",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "버튼",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "버튼",
};
