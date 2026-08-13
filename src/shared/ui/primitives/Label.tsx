import * as React from "react";

import { cn } from "@/shared/lib/cn";

/* eslint-disable jsx-a11y/label-has-associated-control */

const Label = React.forwardRef<HTMLLabelElement, React.ComponentProps<"label">>(
  ({ className, ...props }, ref) => (
    <label
      className={cn("text-foreground text-sm leading-none font-medium", className)}
      ref={ref}
      {...props}
    />
  ),
);

Label.displayName = "Label";

export { Label };
