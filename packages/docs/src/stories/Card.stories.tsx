import type { StoryObj, Meta } from "@storybook/react";
import { Card, CardProps } from "@controle-devs-ui/react";
export default {
  title: "Components/Card",
  component: Card,
} as Meta<CardProps>;

export const Primary: StoryObj<CardProps> = {
  args: {
    title: "Card Controle de devs",
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.",
  },
  image:
    "https://media.istockphoto.com/id/1433145639/pt/foto/american-teenage-woman-sitting-in-white-office-with-laptop-she-is-a-student-studying-online.jpg?s=2048x2048&w=is&k=20&c=LUop4rGslvwtthr7TWRAwE1bDwf-yEQij2GBNIA7Rbk=",
};
