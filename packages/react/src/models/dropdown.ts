export interface DropdownTriggerProps {
  asChild: boolean;
}

export interface DropdownRootProps {
  defaultOpen: boolean;
  open: boolean;
  onOpenChange: () => void;
}

export interface DropdownPortalProps {
  forceMount: boolean;
  container: HTMLElement;
}

export interface DropdownContentProps {
  asChild: boolean;
  loop: boolean;
  onCloseAutoFocus: () => void;
  onEscapeKeyDown: () => void;
  onPointerDownOutside: () => void;
  onFocusOutSide: () => void;
  side: 'top' | 'right' | 'bottom' | 'left';
  sideOffset: number;
  align: 'start' | 'center' | 'end';
  alignOffset: number;
  hideWhenDetached: boolean;
}

export interface DropdownItemProps {
  asChild: boolean;
  disabled: boolean;
  onSelect: () => void;
  textValue: string;
}
