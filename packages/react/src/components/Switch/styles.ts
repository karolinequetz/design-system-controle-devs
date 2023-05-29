import { VariantProps, cva } from 'class-variance-authority';

export const container = cva(['flex items-center'], {
  variants: {
    type: {
      small: 'text-small',
      large: 'text-large',
    },
  },
});

export type ContainerProps = VariantProps<typeof container>;

export const switchRoot = cva(
  'w-[42px] h-[25px] bg-blackA9 dark:bg-gray-300 rounded-full relative shadow-[0_2px_10px] shadow-blackA7 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black dark:data-[state=checked]:bg-white outline-none cursor-default',
);

export const switchThumb = cva(
  'block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]',
);

export const label = cva(
  'text-black dark:text-white text-[15px] leading-none pr-[15px] font-semibold',
);
