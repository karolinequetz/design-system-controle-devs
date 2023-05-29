'use client';
import React from 'react';
import { DotsVerticalIcon } from '@radix-ui/react-icons';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import {
  DropdownContentProps,
  DropdownItemProps,
  DropdownPortalProps,
  DropdownRootProps,
  DropdownTriggerProps,
} from '../../models/dropdown';

import { Button } from '../Button';

import * as Styles from './styles';

export interface DropdownProps {
  elementDropdown?: HTMLElement;
  root?: DropdownRootProps;
  trigger?: DropdownTriggerProps;
  portal?: DropdownPortalProps;
  content?: DropdownContentProps;
  item?: DropdownItemProps;
}

export const Dropdown = ({
  elementDropdown,
  root,
  trigger,
  portal,
  content,
  item,
}: DropdownProps) => {
  return (
    <DropdownMenu.Root {...root}>
      <DropdownMenu.Trigger>
        <Button
          icon={<DotsVerticalIcon />}
          aria-label="Customise options"
          className={Styles.button()}
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal container={elementDropdown}>
        <DropdownMenu.Content
          className={Styles.dropdownContent()}
          sideOffset={5}
          {...content}
        >
          <DropdownMenu.Item className={Styles.dropdownItem()} {...item}>
            Editar
          </DropdownMenu.Item>
          <DropdownMenu.Item className={Styles.dropdownItem()} {...item}>
            Excluir
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
