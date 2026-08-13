import * as React from "react";

import { cn } from "@/shared/lib/cn";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      className={cn(
        "border-border text-foreground placeholder:text-muted-foreground focus-visible:border-foreground focus-visible:ring-ring/20 flex h-12 w-full rounded-[var(--radius-control)] border bg-white px-4 text-base transition-colors outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      type={type}
      {...props}
    />
  ),
);

Input.displayName = "Input";

export { Input };
