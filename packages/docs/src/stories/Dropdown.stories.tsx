import type { StoryObj, Meta } from '@storybook/react';
import { Dropdown, DropdownProps } from '@controle-devs-ui/react';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta<DropdownProps>;

export const Default: StoryObj<DropdownProps> = {
  args: {
    elementDropdown: document.getElementById('storybook-root'),
    root: {
      defaultOpen: true,
      open: true,
      onOpenChange: () => {},
    },
    trigger: {
      asChild: false,
    },
    content: {
      align: 'center',
      alignOffset: 0,
      asChild: true,
      forceMount: true,
      hideWhenDetached: true,
      loop: false,
      onCloseAutoFocus: () => {},
      onEscapeKeyDown: () => {},
      onFocusOutSide: () => {},
      onPointerDownOutside: () => {},
      side: 'bottom',
      sideOffset: 0,
    },
    item: {
      asChild: false,
      disabled: false,
      onSelect: () => {},
      textValue: 'teste',
    },
    portal: {
      container: document.body,
      forceMount: false,
    },
  },
};
