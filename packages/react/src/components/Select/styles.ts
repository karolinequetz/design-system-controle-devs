import { cva } from "class-variance-authority";

export const selectTrigger = cva(
  " inline-flex items-center justify-between rounded-md px-2 sm:px-4 py-1 text-gray-500 bg-gray-100 border-2  border-primary dark:border-blue-700 cursor-pointer"
);

export const downArrowIcon = cva("px-2 text-primary dark:text-blue-700");

export const upArrowIcon = cva(
  "flex items-center justify-center h-6 bg-white text-primary dark:text-blue-700 cursor-pointer"
);

export const selectItem = cva(
  " py-1 px-2 rounded cursor-default focus:outline-none focus:bg-primary dark:focus:bg-blue-700 focus:text-gray-100"
);

export const selectContent = cva(" p-1 shadow-xl bg-gray-100 rounded");

export const checkItem = cva(
  "absolute   inline-flex items-center justify-center"
);
export const scrollDownButton = cva(
  "flex items-center justify-center h-6  cursor-default"
);
