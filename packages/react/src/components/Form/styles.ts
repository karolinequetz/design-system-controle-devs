import { cva } from 'class-variance-authority';

export const formContainer = cva('w-full');

export const field = cva('grid mb-2.5');

export const fieldContent = cva('flex items-baseline justify-between');

export const label = cva('text-base font-medium leading-9');

export const validationMessage = cva('text-sm  opacity-[0.8]');
