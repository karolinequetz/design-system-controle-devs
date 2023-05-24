import { cva } from 'class-variance-authority';

export const overlay = cva(
  'bg-black data-[state=open]:animate-overlayShow fixed inset-0',
);
export const content = cva(
  ' data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none dark:bg-gray-800',
);
export const title = cva(
  'text-primary dark:text-blue-700 m-0 text-lg font-bold',
);

export const description = cva(
  'text-gray-700 dark:text-gray-200 mt-4 mb-5 text-[15px] leading-normal',
);

export const buttonContent = cva('flex justify-end gap-[25px]');
