import type { StoryObj, Meta } from "@storybook/react";
import { SunIcon } from "@radix-ui/react-icons";
import { Button, ButtonProps } from "@controle-devs-ui/react";
import React from "react";

export default {
  title: "Components/Button",
  component: Button,
} as Meta<ButtonProps>;

export const DefaultButton: StoryObj<ButtonProps> = {
  args: {
    text: "Default Button",
    size: "medium",
    shape: "rectangular",
    onClick: () => {
      console.log("Default Button clicked");
    },
  },
};

export const PrimaryButton: StoryObj<ButtonProps> = {
  args: {
    text: "Primary Button",
    intent: "primary",
    size: "medium",
    shape: "rectangular",
    onClick: () => {
      console.log("Primary Button clicked");
    },
  },
};

export const SecondaryButton: StoryObj<ButtonProps> = {
  args: {
    text: "Secondary Button",
    intent: "secondary",
    size: "medium",
    shape: "rectangular",
    onClick: () => {
      console.log("Secondary Button clicked");
    },
  },
};

export const MenuButton: StoryObj<ButtonProps> = {
  args: {
    intent: "menuButton",
    size: "small",
    shape: "circular",
    onClick: () => {
      console.log("Menu Button clicked");
    },
    imageSrc: "path/to/image.jpg",
    alt: "Button Image",
  },
};

export const IconButton: StoryObj<ButtonProps> = {
  args: {
    intent: "transparent",
    size: "medium",
    shape: "circular",
    onClick: () => {
      console.log("Transparent Button clicked");
    },
    icon: <SunIcon />, // Substitua pelo componente real do ícone
  },
};
