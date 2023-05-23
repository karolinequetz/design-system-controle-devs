"use client";
import React, { ReactNode } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Button } from "../Button";
import * as Styles from "./styles";

export interface AlertProps {
  title: string;
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export const Alert = ({
  title,
  children,
  open,
  onClose,
  onDelete,
}: AlertProps) => (
  <AlertDialog.Root open={open} onOpenChange={onClose}>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className={Styles.overlay()} />
      <AlertDialog.Content className={Styles.content()}>
        <AlertDialog.Title className={Styles.title()}>
          {title}
        </AlertDialog.Title>
        <AlertDialog.Description className={Styles.description()}>
          {children}
        </AlertDialog.Description>
        <div className={Styles.buttonContent()}>
          <AlertDialog.Cancel asChild>
            <Button
              intent="secondary"
              size="small"
              text="Cancelar"
              onClick={onClose}
            ></Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <Button
              intent="primary"
              text="Sim, desejo deletar!"
              onClick={onDelete}
            ></Button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);
