import { cva } from 'class-variance-authority';

export const overlay = cva(
  'bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0',
);

export const content = cva(
  'data-[state=open]:animate-contentShow bg-white dark:bg-neutral-900 dark:text-white fixed top-[50%] left-[50%] w-auto max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none',
);

export const title = cva(
  'text-black dark:text-white m-0 text-[17px] font-medium',
);

export const description = cva(
  'text-black dark:text-white mt-[10px] mb-5 text-[15px] leading-normal',
);

export const closeDiv = cva('mt-[25px] flex justify-end');

export const closeButton = cva(
  'absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none',
);
