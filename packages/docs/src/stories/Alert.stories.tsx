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
    elementAlert: document.getElementById("storybook-root"),
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
