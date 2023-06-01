import { cva } from 'class-variance-authority';

export const formContainer = cva('w-full');

export const field = cva('grid mb-2.5');

export const fieldContent = cva('flex flex-col ');

export const label = cva('text-base font-medium leading-9 dark:text-white');

export const validationMessage = cva('text-sm text-red-900 opacity-[0.8]');
