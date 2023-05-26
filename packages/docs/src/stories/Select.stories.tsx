import React from "react";
import type { StoryObj, Meta } from "@storybook/react";
import { Select, SelectProps } from "@controle-devs-ui/react";

export default {
  title: "Components/Select",
  component: Select,
  decorators: [
    (Story) => (
      <div className="absolute flex flex-col w-64 left-0 overflow-x-hidden">
        <Story />
      </div>
    ),
  ],
} as Meta<SelectProps>;

export const Primary: StoryObj<SelectProps> = {
  args: {
    placeholder: "Selecione as hard skills ...",
    descriptiveTextForAccessibility: "select com opções de hard skills ",
    options: [
      { id: "1", description: "React Js" },
      { id: "2", description: "React Native" },
      { id: "3", description: "Angular" },
      { id: "4", description: "C#" },
    ],
  },
};
