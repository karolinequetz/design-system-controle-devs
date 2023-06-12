import { cva } from 'class-variance-authority';

export const select = cva(' text-gray-700 dark:text-gray-500');
export const label = cva(' bg-purple-100 dark:bg-blue-200 ');
export const close = cva(
  ' bg-purple-100 dark:bg-blue-200 text-primary dark:text-blue-700',
);
export const option = cva(
  ' hover:bg-primary dark:hover:bg-blue-700 hover:text-white dark:hover:text-white',
);
export const selectedOption = cva(
  ' bg-primary dark:bg-blue-700 hover:bg-primary dark:hover:bg-blue-700  hover:text-white dark:hover:text-white',
);

export const text = cva('ml-2 select-none text-sm font-medium');
