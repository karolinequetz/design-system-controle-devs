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
  asChild: boolean;
}

export interface AlertProps {
  title: ReactNode | string;
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
  elementAlert?: HTMLElement | null;
  firstButton?: ButtonProps;
  secondButton?: ButtonProps;
  content?: ContentProps;
}

export const Alert = ({
  title,
  children,
  open,
  onClose,
  onDelete,
  content,
  elementAlert,
  firstButton,
  secondButton,
}: AlertProps) => (
  <AlertDialog.Root open={open} onOpenChange={onClose}>
    <AlertDialog.Portal container={elementAlert}>
      <AlertDialog.Content
        onEscapeKeyDown={content?.onEscapeKeyDown}
        asChild={content?.asChild}
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
