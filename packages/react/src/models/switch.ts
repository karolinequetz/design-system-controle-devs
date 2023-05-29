export interface SwitchRootProps {
  asChild?: boolean;
  defaultChecked?: boolean;
  checked?: boolean;
  onCheckedChange?: () => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
}

export interface SwitchThumbProps {
  asChild?: boolean;
}
