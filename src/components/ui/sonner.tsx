'use client';

import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-gradient-to-r group-[.toaster]:from-white/95 group-[.toaster]:to-gray-50/95 group-[.toaster]:backdrop-blur-sm group-[.toaster]:text-gray-900 group-[.toaster]:border group-[.toaster]:border-gray-200 group-[.toaster]:shadow-lg group-[.toaster]:rounded-lg',
          description: 'group-[.toast]:text-gray-600',
          actionButton:
            'group-[.toast]:bg-gray-100 group-[.toast]:text-gray-900 group-[.toast]:border group-[.toast]:border-gray-200 group-[.toast]:hover:bg-gray-200',
          cancelButton:
            'group-[.toast]:bg-gray-100 group-[.toast]:text-gray-900 group-[.toast]:border group-[.toast]:border-gray-200 group-[.toast]:hover:bg-gray-200',
          success:
            'group-[.toaster]:bg-gradient-to-r group-[.toaster]:from-emerald-50/95 group-[.toaster]:via-green-50/95 group-[.toaster]:to-emerald-100/95 group-[.toaster]:backdrop-blur-sm group-[.toaster]:text-emerald-800 group-[.toaster]:border group-[.toaster]:border-emerald-200 group-[.toaster]:shadow-lg group-[.toaster]:shadow-emerald-500/10',
          error:
            'group-[.toaster]:bg-gradient-to-r group-[.toaster]:from-red-50/95 group-[.toaster]:via-rose-50/95 group-[.toaster]:to-red-100/95 group-[.toaster]:backdrop-blur-sm group-[.toaster]:text-red-800 group-[.toaster]:border group-[.toaster]:border-red-200 group-[.toaster]:shadow-lg group-[.toaster]:shadow-red-500/10',
          warning:
            'group-[.toaster]:bg-gradient-to-r group-[.toaster]:from-amber-50/95 group-[.toaster]:via-yellow-50/95 group-[.toaster]:to-orange-50/95 group-[.toaster]:backdrop-blur-sm group-[.toaster]:text-amber-800 group-[.toaster]:border group-[.toaster]:border-amber-200 group-[.toaster]:shadow-lg group-[.toaster]:shadow-amber-500/10',
          info: 'group-[.toaster]:bg-gradient-to-r group-[.toaster]:from-blue-50/95 group-[.toaster]:via-indigo-50/95 group-[.toaster]:to-blue-100/95 group-[.toaster]:backdrop-blur-sm group-[.toaster]:text-blue-800 group-[.toaster]:border group-[.toaster]:border-blue-200 group-[.toaster]:shadow-lg group-[.toaster]:shadow-blue-500/10'
        }
      }}
      richColors
      {...props}
    />
  );
};

export { Toaster };
