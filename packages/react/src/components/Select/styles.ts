import { cva } from 'class-variance-authority';

export const selectTrigger = cva(
  'w-full h-full inline-flex items-center justify-between border-2 rounded px-2 sm:px-4 py-1 text-gray-500 bg-white cursor-pointer',
);
export const downArrowIcon = cva(
  'w-5 h-5 font-bold text-gray-400 hover:text-gray-500',
);

export const upArrowIcon = cva(
  'flex items-center justify-center h-6 bg-white text-primary dark:text-blue-700 cursor-pointer',
);

export const selectItem = cva(
  ' relative flex items-center px-8 py-2 text-sm text-gray-700 dark:text-gray-500 font-medium focus:bg-primary dark:focus:bg-blue-700 focus:text-gray-100 dark:focus:text-gray-100 radix-disabled:opacity-50 focus:outline-none select-none',
);

export const selectContent = cva(' p-1 shadow-xl bg-gray-100 rounded');

export const checkItem = cva('absolute left-2 inline-flex items-center');
export const scrollDownButton = cva(
  'flex items-center justify-center  cursor-default',
);
