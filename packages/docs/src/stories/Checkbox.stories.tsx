import type { StoryObj, Meta } from "@storybook/react";
import { Checkbox, CheckboxProps } from "@controle-devs-ui/react";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {
  args: {
    text: "checkbox controle de devs",
    root: {},
    indicator: {
      asChild: false,
    },
  },
};

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    text: "checkbox desabilitado",
    root: {
      defaultChecked: true,
      disabled: true,
      onCheckedChange: () => console.log("alterar checkbox"),
      checked: true,
      required: false,
      name: "disabled",
      value: "disabled1",
    },
    indicator: {
      asChild: true,
    },
  },
};
