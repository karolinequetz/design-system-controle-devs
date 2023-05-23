import { cva } from 'class-variance-authority';

export const overlay = cva(
  'bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0',
);
export const content = cva(
  ' data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none',
);
export const title = cva(
  'text-primary  dark:text-blue-700 m-0 text-lg font-bold',
);

export const description = cva(
  'text-gray-700 dark:text-gray-200 mt-4 mb-5 text-[15px] leading-normal',
);

export const buttonContent = cva('flex justify-end gap-[25px]');

export const actionButton = cva(
  'text-white bg-primary hover:bg-violet-600 focus:shadow-white inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]',
);
