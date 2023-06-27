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

export const checkboxContent = cva('flex items-center  focus:outline-none');

export const checkbox = cva(
  'flex h-4 w-4 accent-purple-700 dark:accent-blue-700  items-center justify-center rounded bg-gray-100 dark:border-blue-700 border-2 border-purple-700',
);
