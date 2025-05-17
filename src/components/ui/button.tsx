import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-xs hover:from-purple-700 hover:to-purple-600 focus-visible:ring-purple-400/50',
        destructive:
          'bg-gradient-to-r from-red-00 to-red-500 text-white shadow-xs hover:from-red-700 hover:to-red-600 focus-visible:ring-red-400/50 dark:focus-visible:ring-red-400/40 dark:bg-red-600/60',
        outline:
          'border border-purple-200 bg-background shadow-xs hover:bg-gradient-to-r hover:from-purple-100/50 hover:to-purple-200/50 hover:text-purple-800 dark:border-purple-800 dark:hover:bg-purple-900/50',
        secondary:
          'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 shadow-xs hover:from-purple-200 hover:to-purple-300 dark:from-purple-900 dark:to-purple-800 dark:text-purple-100',
        ghost:
          'hover:bg-gradient-to-r hover:from-purple-100/50 hover:to-purple-200/50 hover:text-purple-800 dark:hover:from-purple-900/50 dark:hover:to-purple-800/50 dark:hover:text-purple-200',
        link: 'text-purple-600 underline-offset-4 hover:underline dark:text-purple-400',
        muted: 'bg-muted text-muted-foreground hover:bg-muted/80',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        xs: 'h-6 rounded-md px-2 has-[>svg]:px-1.5',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        xl: 'h-12 rounded-md px-8 has-[>svg]:px-6',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
