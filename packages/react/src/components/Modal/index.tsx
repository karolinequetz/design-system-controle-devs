'use client';
import React, { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

import { Button } from '../Button';

import * as Styles from './styles';

export interface ModalProps {
  title: string;
  description: string;
  children?: ReactNode;
  open: boolean;
  onClose?: () => void;
}

export const Modal = ({
  title,
  description,
  children,
  open,
  onClose,
}: ModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className={Styles.overlay()} />
        <Dialog.Content className={Styles.content()}>
          <Dialog.Title className={Styles.title()}>{title}</Dialog.Title>
          <Dialog.Description className={Styles.description()}>
            {description}
          </Dialog.Description>
          {children}
          <div className={Styles.closeDiv()}>
            <Dialog.Close asChild>
              <Button text="Voltar" size="small" onClick={onClose} />
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <Button
              icon={<Cross2Icon />}
              onClick={onClose}
              className={Styles.closeButton()}
              aria-label="Close"
            />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
