import { cva } from 'class-variance-authority';

export const checkboxRoot = cva('flex items-center  focus:outline-none ');

export const checkboxContent = cva(
  'flex w-5 h-5 items-center justify-center rounded bg-gray-100 dark:border-blue-700 border-2 border-primary  radix-disabled:bg-blue-700 ',
);

export const checkboxIcon = cva(
  'h-5 w-5 bg-primary  text-gray-100 dark:bg-blue-700',
);

export const checkboxDisabled = cva('bg-yellow-600 text-gray-700 ');

export const span = cva(
  'ml-2 select-none text-sm font-medium text-gray-700 dark:text-gray-200',
);
