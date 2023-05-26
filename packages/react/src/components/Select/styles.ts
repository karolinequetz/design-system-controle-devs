import { cva } from 'class-variance-authority';

export const selectTrigger = cva(
  ' inline-flex items-center justify-center py-1 px-4 text-gray-500 bg-gray-100 border-2 border-primary dark:border-blue-700 rounded cursor-pointer',
);

export const downArrowIcon = cva('text-primary dark:text-blue-700');

export const upArrowIcon = cva(
  'flex items-center justify-center h-6 bg-white text-primary dark:text-blue-700 cursor-pointer',
);

export const selectItem = cva(
  'py-1 px-2 rounded cursor-default focus:outline-none focus:bg-primary dark:focus:bg-blue-700 focus:text-gray-100',
);

export const selectContent = cva('p-1 shadow-xl bg-gray-100 rounded');

export const checkItem = cva(
  'absolute left-0 w-[25px] inline-flex items-center justify-center',
);
export const scrollDownButton = cva(
  'flex items-center justify-center h-[25px] bg-orange-700 text-violet11 cursor-default',
);
