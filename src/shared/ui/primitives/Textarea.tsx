import * as React from "react";

import { cn } from "@/shared/lib/cn";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "border-border text-foreground placeholder:text-muted-foreground focus-visible:border-foreground focus-visible:ring-ring/20 flex min-h-32 w-full resize-y rounded-[var(--radius-control)] border bg-white px-4 py-3 text-base transition-colors outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);

Textarea.displayName = "Textarea";

export { Textarea };
