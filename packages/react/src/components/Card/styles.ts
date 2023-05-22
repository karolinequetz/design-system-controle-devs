import { cva } from 'class-variance-authority';

export const container = cva(
  'max-w-sm items-center justify-center w-full bg-white hover:bg-gray-100 rounded overflow-hidden shadow-lg px-6 py-4 cursor-pointer',
);
export const actions = cva('flex justify-end pb-4');
export const EditAndDeleteButtons = cva(
  ' hover:text-purple-600 text-primary-purple font-semibold px-2 ',
);

export const EditAndDeleteIcons = cva('w-5 h-5 inline-block');

export const imageContainer = cva(
  ' mx-auto h-32 w-32 rounded-full object-cover border-2 p-1 border-purple-700',
);

export const imageContent = cva('h-full w-full rounded-full border-white');
export const title = cva(
  'text-center text-purple-700 font-bold text-xl mb-2 pt-4',
);
export const children = cva('text-gray-700 text-center text-base');

export const skillsContent = cva('flex justify-center px-6 pt-4 pb-2');
export const skills = cva(
  ' inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2',
);
