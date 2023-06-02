import { cva } from 'class-variance-authority';

export const itemContext = cva('flex flex-col space-y-8');
export const formDescription = cva('text-sm');
export const formMessage = cva('text-sm font-medium text-red-900');
export const itemError = cva('text-red-900');
