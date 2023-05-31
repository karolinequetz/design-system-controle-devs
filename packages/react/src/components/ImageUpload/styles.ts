import { cva } from 'class-variance-authority';

export const uploadContainer = cva(
  'w-64 h-64 bg-transparent border-dashed border-2 border-black dark:border-white flex flex-col items-center  justify-center',
);

export const buttonTextLabel = cva(
  'inline-block font-semibold text-black dark:text-white text-center hover:bg-gray-100 dark:hover:bg-gray-800 ',
);

export const buttonText = cva(
  'px-4 py-2 border-2 border-purple-500 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800',
);

export const upload = cva('hidden');

export const imageContainer = cva('flex flex-col items-center overflow-hidden');

export const imageUploaded = cva('max-w-full max-h-full');

export const iconContainer = cva(
  'absolute top-0 left-0 mt-2 mr-2 flex space-x-2',
);

export const icon = cva('w-6 h-6 ');

export const container = cva('relative');
