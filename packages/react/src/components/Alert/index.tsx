"use client";
import React, { ReactNode } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Button } from "../Button";
import * as Styles from "./styles";

interface ButtonProps {
  intent?: "primary" | "secondary" | "menuButton" | "transparent";
  size?: "small" | "medium";
  text: string;
}
interface ContentProps {
  onEscapeKeyDown?: () => void;
  forceMount?: true;
}

interface PortalProps {
  elementAlert: () => HTMLElement | null;
  forceMount?: true;
}

interface OverlayProps {
  forceMount?: true;
}

export interface AlertProps {
  title: ReactNode | string;
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
  firstButton?: ButtonProps;
  secondButton?: ButtonProps;
  content?: ContentProps;
  portal?: PortalProps;
  overlay?: OverlayProps;
}

export const Alert = ({
  title,
  children,
  open,
  onClose,
  onDelete,
  content,
  portal,
  firstButton,
  secondButton,
  overlay,
}: AlertProps) => (
  <AlertDialog.Root open={open} onOpenChange={onClose}>
    <AlertDialog.Portal
      container={portal?.elementAlert()}
      forceMount={portal?.forceMount}
    >
      <AlertDialog.Overlay
        className={Styles.overlay()}
        forceMount={overlay?.forceMount}
      />
      <AlertDialog.Content
        onEscapeKeyDown={content?.onEscapeKeyDown}
        forceMount={content?.forceMount}
        className={Styles.content()}
      >
        <AlertDialog.Title className={Styles.title()}>
          {title}
        </AlertDialog.Title>
        <AlertDialog.Description className={Styles.description()}>
          {children}
        </AlertDialog.Description>
        <div className={Styles.buttonContent()}>
          <AlertDialog.Cancel asChild>
            <Button
              intent={firstButton?.intent}
              size={firstButton?.size}
              text={firstButton?.text}
            ></Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <Button text={secondButton?.text} onClick={onDelete}></Button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);
