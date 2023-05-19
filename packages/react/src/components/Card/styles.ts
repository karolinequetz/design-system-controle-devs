import { cva } from "class-variance-authority";

export const container = cva(
  "max-w-sm w-full bg-white hover:bg-gray-100 rounded overflow-hidden shadow-lg px-6 py-4 cursor-pointer"
);
export const imageContainer = cva(
  " mx-auto h-40 w-40 rounded-full object-cover border-2 p-1 border-purple-700"
);

export const imageContent = cva("h-full w-full rounded-full border-white ");
export const title = cva("text-center text-purple-700 font-bold text-xl mb-2");
export const children = cva("text-gray-700 text-center text-base");
