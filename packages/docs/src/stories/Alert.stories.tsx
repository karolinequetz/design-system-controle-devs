import type { StoryObj, Meta } from "@storybook/react";
import { Alert, AlertProps } from "@controle-devs-ui/react";

export default {
  title: "Components/Alert",
  component: Alert,
} as Meta<AlertProps>;

export const Primary: StoryObj<AlertProps> = {
  args: {
    title: "Atenção!",
    children: "Deseja excluir permanentemente?",
    open: true,
    portal: {
      elementAlert: () => document.getElementById("storybook-root"),
      forceMount: true,
    },
    overlay: {
      forceMount: true,
    },
    content: {
      forceMount: true,
      onEscapeKeyDown: () => console.log("Esc"),
    },
    firstButton: {
      intent: "secondary",
      size: "small",
      text: "Cancelar",
    },
    secondButton: {
      text: "Sim, desejo deletar!",
    },
  },
};
