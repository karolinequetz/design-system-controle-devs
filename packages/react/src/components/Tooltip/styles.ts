import { cva } from 'class-variance-authority';

export const content = cva(
  'data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-primary dark:text-white select-none rounded-[4px] bg-white dark:bg-gray-900 px-[15px] py-[10px] text-sm leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]',
);

export const arrow = cva('fill-white dark:fill-gray-900');
