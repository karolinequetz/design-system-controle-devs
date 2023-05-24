import type { StoryObj, Meta } from "@storybook/react";
import { Checkbox, CheckboxProps } from "@controle-devs-ui/react";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {
  args: {
    text: "checkbox controle de devs",
  },
};
