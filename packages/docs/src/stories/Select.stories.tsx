import React from "react";
import type { StoryObj, Meta } from "@storybook/react";
import { Select, SelectProps } from "@controle-devs-ui/react";

export default {
  title: "Components/Select",
  component: Select,
  decorators: [
    (Story) => (
      <div
        id="decorator"
        className="absolute flex flex-col bg-dark w-64 left-0 top-10 bottom-0 border-l overflow-x-hidden overflow-y-auto"
      >
        <Story />
      </div>
    ),
  ],
} as Meta<SelectProps>;

export const Primary: StoryObj<SelectProps> = {
  args: {
    placeholder: "Selecione as hard skills ...",
    descriptiveTextForAccessibility: "select com opções de hard skills ",
    portal: {
      container: () => document.getElementById("storybook-root"),
    },
    options: [
      { id: "1", description: "React Js" },
      { id: "2", description: "React Native" },
      { id: "3", description: "Angular" },
      { id: "4", description: "C#" },
    ],
  },
};

export const Disabled: StoryObj<SelectProps> = {
  args: {
    placeholder: "Selecione as hard skills ...",
    descriptiveTextForAccessibility: "select com opções de hard skills ",
    portal: {
      container: () => document.getElementById("storybook-root"),
    },
    content: {
      position: "popper",
      sideOffset: 5,
      align: "center",
      avoidCollisions: true,
      hideWhenDetached: true,
    },
    item: {
      disabled: true,
    },
    options: [
      { id: "1", description: "React Js" },
      { id: "2", description: "React Native" },
      { id: "3", description: "Angular" },
      { id: "4", description: "C#" },
    ],
  },
};
