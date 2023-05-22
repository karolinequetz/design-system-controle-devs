import React from "react";
import { Meta } from "@storybook/react";
import { Modal } from "@controle-devs-ui/react";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    open: { control: "boolean" },
    onClose: { action: "closed" },
  },
} as Meta;

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Modal Title",
  description: "Modal Description",
  open: true,
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  title: "Modal Title",
  description: "Modal Description",
  open: true,
  children: (
    <div>
      <p>Child Component 1</p>
      <p>Child Component 2</p>
    </div>
  ),
};
