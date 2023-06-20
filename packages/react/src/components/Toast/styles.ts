import { cva } from 'class-variance-authority';

export const container = cva(
  'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:top-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
);

export const content = cva(
  ' data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full',
);

export const defaultVariants = cva(
  'bg-background border dark:bg-gray-100 dark:text-gray-900',
);

export const success = cva(
  'group success border-teal-500 bg-teal-100 text-teal-900',
);

export const error = cva('group error border-red-400 bg-red-100 text-red-700');

export const warning = cva(
  'group warning border-orange-500 bg-orange-100 text-orange-700',
);

export const toastAction = cva(
  'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.error]:border-red-400 group-[.error]:hover:border-red-300 group-[.error]:hover:bg-red-100 group-[.error]:hover:text-red-700 group-[.error]:focus:ring-red-100',
);

export const close = cva(
  'absolute right-2 top-2 rounded-md p-1 hover:text-gray-300 group-[.success]:text-teal-900 group-[.warning]:text-orange-700  transition-opacity group-[.success]:hover:text-teal-400 group-[.warning]:hover:text-orange-400 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.error]:text-red-600 group-[.error]:hover:text-red-400 group-[.error]:focus:ring-red-600 group-[.error]:focus:ring-offset-red-400',
);

export const closeIcon = cva('h-4 w-4');

export const title = cva('text-sm font-bold');

export const description = cva('text-sm opacity-90');
