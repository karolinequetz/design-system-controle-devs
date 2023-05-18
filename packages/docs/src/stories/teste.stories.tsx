import type { StoryObj, Meta } from "@storybook/react";
import { Teste } from "./Teste";
export default {
  title: "TESTE",
  component: Teste,
} as Meta;

export const Primary: StoryObj = {
  args: {
    text: "teste",
  },
};
