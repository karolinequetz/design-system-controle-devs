import type { StoryObj, Meta } from '@storybook/react';
import { Card, CardProps } from '@controle-devs-ui/react';
export default {
  title: 'Components/Card',
  component: Card,
} as Meta<CardProps>;

export const Primary: StoryObj<CardProps> = {
  args: {
    title: 'Lorem Ipsum ',
    children:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.',
    skills: ['react', 'c#', 'slq'],
    image:
      'https://plus.unsplash.com/premium_photo-1661308204413-399aa3865ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    moreDetails: true,
  },
};
