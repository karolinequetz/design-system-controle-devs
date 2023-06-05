import { cva } from 'class-variance-authority';

export const container = cva('relative');
export const icon = cva('h-5 ');
export const iconButton = cva('flex items-center focus:outline-none');
export const filterContainer = cva(
  'absolute mt-2 w-96 bg-white dark:bg-gray-900 dark:text-white rounded shadow-lg py-4 space-y-4 p-8',
);
export const label = cva('block font-bold');
export const searchButton = cva('flex justify-end');
