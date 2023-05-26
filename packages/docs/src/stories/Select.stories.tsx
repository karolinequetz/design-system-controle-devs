import React, { ReactNode } from "react";
import type { StoryObj, Meta } from "@storybook/react";
import { Select, SelectProps } from "@controle-devs-ui/react";

export default {
  title: "Components/Select",
  component: Select,
} as Meta<SelectProps>;

type DecoratorProps = {
  children: ReactNode;
};
const Decorator: React.FC<DecoratorProps> = ({ children }) => (
  <div className="absolute flex flex-col w-64 left-0 bg-red-600 overflow-x-hidden">
    {children}
  </div>
);

export const Primary: StoryObj<SelectProps> = (args) => (
  <Decorator>
    <Select {...args} />
  </Decorator>
);
Primary.args = {
  placeholder: "Selecione as hard skills ...",
  descriptiveTextForAccessibility: "select com opções de hard skills ",
  options: [
    { id: "1", description: "React Js" },
    { id: "2", description: "React Native" },
    { id: "3", description: "Angular" },
    { id: "4", description: "C#" },
  ],
};
