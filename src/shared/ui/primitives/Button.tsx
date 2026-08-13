import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/shared/lib/cn";

const buttonVariants = cva(
  "inline-flex shrink-0 scale-100 cursor-pointer items-center justify-center whitespace-nowrap font-medium outline-none transition-[color,background-color,border-color,scale] duration-400 ease-[cubic-bezier(.4,0,.2,1)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[.975] disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-[#242424]",
        secondary: "bg-white text-black hover:bg-white",
        outline: "border border-border bg-transparent text-foreground hover:bg-white",
        ghost: "bg-transparent text-foreground hover:bg-black/5",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 gap-2 rounded-xl px-6 text-base",
        sm: "h-9 gap-1.5 rounded-[0.625rem] px-4 text-sm",
        lg: "h-14 gap-2 rounded-xl px-8 text-lg",
        icon: "size-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot.Root : "button";

  return (
    <Component
      className={cn(buttonVariants({ variant, size, className }))}
      data-size={size}
      data-slot="button"
      data-variant={variant}
      {...props}
    />
  );
}

export { Button };
