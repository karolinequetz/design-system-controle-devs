import React, { ReactNode } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import * as Styles from './styles';

interface TooltipProvider {
  delayDuration?: number;
  skipDelayDuration?: number;
  disableHoverableContent?: boolean;
}

interface TooltipRoot {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  delayDuration?: number;
  disableHoverableContent?: boolean;
}

interface TooltipPortal {
  container: () => HTMLElement;
}

interface TooltipContent {
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  avoidCollisions?: boolean;
  collisionBoundary?: Element | null | Array<Element | null>;
  arrowPadding?: number;
  sticky?: 'partial' | 'always';
  hideWhenDetached?: boolean;
}

interface TooltipArrow {
  width?: number;
  height?: number;
}

export interface TooltipProps {
  children: ReactNode;
  message: string;
  provider?: TooltipProvider;
  root?: TooltipRoot;
  portal?: TooltipPortal;
  content?: TooltipContent;
  arrow?: TooltipArrow;
  classNameContent?: string;
  classNameArrow?: string;
}

export const Tooltip = ({
  children,
  message,
  provider,
  root,
  portal,
  content,
  arrow,
  classNameContent,
  classNameArrow,
}: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider {...provider}>
      <TooltipPrimitive.Root {...root}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal container={portal?.container()}>
          <TooltipPrimitive.Content
            {...content}
            className={classNameContent || Styles.content()}
          >
            {message}
            <TooltipPrimitive.Arrow
              {...arrow}
              className={classNameArrow || Styles.arrow()}
            />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
